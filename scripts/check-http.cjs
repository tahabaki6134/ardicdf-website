const {spawn}=require('node:child_process');
const assert=require('node:assert/strict');
const path=require('node:path');
const root=path.resolve(__dirname,'..'),port='3139',origin='http://127.0.0.1:'+port;
const child=spawn(process.execPath,[path.join(root,'node_modules/next/dist/bin/next'),'start','-H','127.0.0.1','-p',port],{cwd:root,stdio:['ignore','pipe','pipe']});
let logs='';child.stderr.on('data',x=>{logs+=x;});
const ready=new Promise((resolve,reject)=>{child.stdout.on('data',x=>{logs+=x;if(String(x).includes('Ready'))resolve();});child.once('error',reject);child.once('exit',code=>reject(new Error('Server exited '+code+' '+logs)));});
(async()=>{try{await ready;for(const [url,lang,status] of [['/','tr',200],['/en','en',200],['/ar','ar',200],['/ar/contact','ar',200],['/de/manufacturing/carbon-fiber','de',200],...['tr','en','de','fr','ru','ar'].map(lang=>[(lang==='tr'?'':'/'+lang)+'/unknown-test',lang,404])]){const r=await fetch(origin+url),html=await r.text();assert.equal(r.status,status,url);console.log(url,r.status,(html.match(/<html[^>]*>/)||[])[0]);assert.ok(html.includes('lang="'+lang+'"'),url);if(lang==='ar')assert.ok(html.includes('dir="rtl"'),url);if(status===404)assert.match(r.headers.get('x-robots-tag'),/noindex/);}
for(const [from,to] of [['/live','/fabrication'],['/en/live','/en/fabrication'],['/compare?left=carbon&right=epoxy','/en/compare?left=carbon&right=epoxy'],['/services/large-format-3d-printing','/en/manufacturing/3d-printing']]){const r=await fetch(origin+from,{redirect:'manual'});assert.equal(r.status,308,from);assert.equal(new URL(r.headers.get('location'),origin).pathname+new URL(r.headers.get('location'),origin).search,to,from);}
const r=await fetch(origin+'/review.html');assert.equal(r.status,200);assert.match(r.headers.get('x-robots-tag'),/noindex/);console.log('HTTP status and legacy redirect checks passed');
}catch(e){console.error(e);process.exitCode=1;}finally{child.kill('SIGTERM');}})();
