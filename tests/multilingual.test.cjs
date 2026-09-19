const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const { test } = require('node:test');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const resolve = Module._resolveFilename;
Module._resolveFilename = function(request, ...args) { return resolve.call(this, request.startsWith('@/') ? path.join(root, request.slice(2)) : request, ...args); };
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText, filename);
const {locales,siteOrigin} = require('../lib/i18n/locales.ts');
const {allPages,pagePath,resolvePage,languageAlternates} = require('../lib/i18n/routes.ts');
const {pageMetadata} = require('../lib/i18n/seo.ts');
const {dictionary} = require('../lib/i18n/dictionary.ts');
const {methodCopy,methodIds} = require('../lib/i18n/methods.ts');
const {localizedContent} = require('../lib/i18n/content.ts');
const {manufacturingMethods,methodPath} = require('../lib/manufacturing.ts');
const {projects} = require('../lib/projects.ts');
const {portfolioCategories,getPortfolioImageSrc,conceptCollections} = require('../lib/content.ts');
const {targetCountries,countryOptions} = require('../lib/i18n/countries.ts');
const {countryPages} = require('../lib/i18n/country-pages.ts');
const {initialEnquiry} = require('../lib/enquiry.ts');
const {POST} = require('../app/api/contact/route.ts');
const {middleware} = require('../middleware.ts');
const {NextRequest} = require('next/server');

test('six complete dictionaries, technical content and original photographs', () => {
  const keys = Object.keys(dictionary('en')).sort();
  assert.equal(new Set(targetCountries).size,24);
  assert.equal(countryPages.length,0,'Do not publish speculative country pages');
  for (const locale of locales) {
    const t = dictionary(locale), content = localizedContent(locale);
    assert.deepEqual(Object.keys(t).sort(),keys);
    assert.ok(Object.values(t).every(value=>typeof value==='string'&&value.trim()));
    assert.equal(countryOptions(locale).length,249);
    for (const id of methodIds) {
      const copy=methodCopy(locale,id);
      for(const key of ['title','intro','summary','cost','detail','mechanical','weight','environment','volume','finish']) assert.ok(copy[key],`${locale}/${id}/${key}`);
      for(const key of ['steps','uses','drivers','limits']) assert.ok(copy[key].length,`${locale}/${id}/${key}`);
    }
    assert.equal(methodCopy(locale,'carbon').processes.length,3);
    for(const project of projects) assert.ok(content.projects[project.id]?.description);
    for(const category of portfolioCategories.filter(c=>c.published!==false)) assert.ok(content.archives[category.slug]?.title);
    if(locale!=='en') assert.notEqual(t.hero_intro,dictionary('en').hero_intro);
  }
  for (const c of portfolioCategories.filter(c=>c.published!==false)) for(const image of c.images) assert.ok(fs.existsSync(path.join(root,'public',getPortfolioImageSrc(image))),getPortfolioImageSrc(image));
  for(const c of conceptCollections) for(const image of [c.image,...(c.galleryImages||[]).map(i=>i.src)].filter(Boolean)) assert.ok(fs.existsSync(path.join(root,'public',image)),image);
});

test('canonical URLs and reciprocal language alternates resolve to equivalent pages',()=>{
  const urls=new Set();
  for(const locale of locales) for(const page of allPages) {
    const url=pagePath(locale,page); assert.ok(!urls.has(url),url);urls.add(url);
    const slug=url.split('/').filter(Boolean);if(locale!=='tr')slug.shift();
    assert.deepEqual(resolvePage(locale,slug),page,url);
    const meta=pageMetadata(locale,page);
    assert.equal(meta.alternates.canonical,siteOrigin+url);
    assert.equal(Object.keys(meta.alternates.languages).length,7);
    for(const target of locales) assert.equal(meta.alternates.languages[target],siteOrigin+pagePath(target,page));
    assert.equal(meta.alternates.languages['x-default'],siteOrigin+pagePath('en',page));
    assert.ok(meta.title&&meta.description);
  }
  assert.equal(urls.size,246);
  for(const m of manufacturingMethods) {
    assert.equal(pagePath('tr',{kind:'method',id:m.id}),methodPath(m,'tr'));
    assert.equal(pagePath('en',{kind:'method',id:m.id}),'/en'+methodPath(m,'en'));
  }
});

test('legacy links retain meaning and Turkish root paths rewrite without changing language',()=>{
  function route(pathname,host=siteOrigin){return middleware(new NextRequest(host+pathname));}
  assert.equal(route('/').headers.get('x-middleware-rewrite'),siteOrigin+'/tr');
  assert.equal(route('/contact?method=carbon').headers.get('x-middleware-rewrite'),siteOrigin+'/tr/contact?method=carbon');
  assert.equal(route('/manufacturing/carbon-fiber?x=1').headers.get('location'),siteOrigin+'/en/manufacturing/carbon-fiber?x=1');
  assert.equal(route('/en/live').headers.get('location'),siteOrigin+'/en/fabrication');
  assert.equal(route('/live').headers.get('location'),siteOrigin+'/fabrication');
  assert.equal(route('/ar/references').headers.get('location'),siteOrigin+'/ar/works');
  assert.equal(route('/services/composite-fabrication').headers.get('location'),siteOrigin+'/en/manufacturing/fiberglass-grp');
  assert.equal(route('/tr/imalat/epoksi-recine-dokum').headers.get('location'),null);
  assert.equal(route('/contact?method=epoxy','https://www.ardicdf.com.tr').headers.get('location'),null);
  assert.equal(resolvePage('ar',['qa']),undefined);
});

test('all languages share one verified notification path and localize customer replies and errors',async t=>{
  const originalFetch=global.fetch,originalEnv={...process.env};
  t.after(()=>{global.fetch=originalFetch;process.env=originalEnv;});
  process.env.RESEND_API_KEY='mock';process.env.TURNSTILE_SECRET_KEY='mock';process.env.CONTACT_NOTIFICATION_EMAIL='team@example.com';
  for(const language of locales) await t.test(language,async()=>{
    const calls=[];
    global.fetch=async(url,options)=>{calls.push({url,options});return Response.json(url.includes('siteverify')?{success:true}:{id:'mock'});};
    const payload={...initialEnquiry,language,country:'QA',fullName:'Example Client',email:'client@example.com',message:'Complete cabinet, 200 × 80 × 40 cm.',projectType:methodCopy(language,'wood').title,turnstileToken:'mock',selectedProjects:[projects[0].id]};
    const request=data=>new Request(siteOrigin+'/api/contact',{method:'POST',headers:{'Content-Type':'application/json','X-ARDIC-Language':language},body:JSON.stringify(data)});
    const response=await POST(request(payload)); assert.equal(response.status,200);assert.equal(calls.length,3);
    const team=JSON.parse(calls[1].options.body),client=JSON.parse(calls[2].options.body);
    assert.equal(team.to,'team@example.com');assert.match(team.text,/QA/);assert.ok(team.text.includes('('+language+')'));
    assert.ok(team.text.includes(siteOrigin+pagePath(language,{kind:'project',id:projects[0].id})));
    assert.ok(client.subject.includes(dictionary(language).confirmation_subject));
    assert.ok(client.html.includes(`lang="${language}"`));assert.ok(client.html.includes(`dir="${language==='ar'?'rtl':'ltr'}"`));assert.equal(client.attachments,undefined);
    calls.length=0;
    const invalid=await POST(request({...payload,country:'',email:'invalid'}));assert.equal(invalid.status,400);const body=await invalid.json();assert.equal(body.fields.country,dictionary(language).error_required);assert.equal(body.fields.email,dictionary(language).error_email);assert.equal(calls.length,0);
    const malformed=await POST(new Request(siteOrigin+'/api/contact',{method:'POST',headers:{'X-ARDIC-Language':language},body:'broken'}));assert.equal((await malformed.json()).error,dictionary(language).error_request);
  });
});

test('FARMASI gallery, translations, enquiry selection and sharing metadata stay in sync',()=>{
  const project=projects.find(p=>p.id==='farmasi-boss-trip');
  assert.equal(project.gallery.length,3);
  assert.equal(new Set(project.gallery.map(image=>image.src)).size,3);
  assert.equal(project.gallery[0].src,project.image);
  for(const image of project.gallery) {
    assert.ok(fs.existsSync(path.join(root,'public',image.src)),image.src);
    assert.ok(image.width>0&&image.height>0);
  }
  for(const locale of locales) {
    const copy=localizedContent(locale).projects[project.id];
    assert.equal(copy.gallery.length,project.gallery.length);
    assert.ok(copy.note&&copy.details.length>=2);
    for(const image of copy.gallery) assert.ok(image.alt&&image.caption);
    const meta=pageMetadata(locale,{kind:'project',id:project.id});
    assert.equal(meta.openGraph.images[0].url,siteOrigin+project.image);
    assert.equal(meta.twitter.images[0],siteOrigin+project.image);
  }
  const {parseSelectedProjects}=require('../lib/projects.ts');
  assert.deepEqual(parseSelectedProjects(project.id),[project.id]);
});
