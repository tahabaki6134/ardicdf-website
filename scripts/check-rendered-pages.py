"""Check the HTML produced by next build. Does not contact any live service."""
import json
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, parse_qs, unquote
root=Path(__file__).resolve().parent.parent
class Page(HTMLParser):
    def __init__(self):
        super().__init__();self.lang=None;self.direction=None;self.h1=0;self.canonical=None;self.alternates={};self.links=[];self.images=[];self.ids=set()
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='html':self.lang=a.get('lang');self.direction=a.get('dir')
        if tag=='h1':self.h1+=1
        if tag=='link' and a.get('rel')=='canonical':self.canonical=a.get('href')
        if tag=='link' and a.get('rel')=='alternate':self.alternates[a.get('hreflang')]=a.get('href')
        if tag=='a' and 'href' in a:self.links.append(a['href'])
        if tag=='img' and 'src' in a:self.images.append(a['src'])
        if a.get('id'):self.ids.add(a['id'])
manifest=json.loads((root/'.next/prerender-manifest.json').read_text())['routes']
site='https://www.ardicdf.com';locales=['tr','en','de','fr','ru','ar'];pages={};errors=[]
for route in manifest:
    segments=route.strip('/').split('/')
    if segments[0] not in locales:continue
    html=root/'.next/server/app'/ (route.lstrip('/')+'.html')
    if not html.exists():errors.append(f'Missing build HTML: {route}');continue
    parsed=Page();parsed.feed(html.read_text())
    public=route[3:] if segments[0]=='tr' and len(segments)>1 else route
    pages[public]=parsed
    if parsed.lang!=segments[0] or parsed.direction!=('rtl' if segments[0]=='ar' else 'ltr'):errors.append(f'Wrong language/direction: {public}')
    if parsed.h1!=1:errors.append(f'H1 count {parsed.h1}: {public}')
    if parsed.canonical != site+public and not (public == "/" and parsed.canonical == site):errors.append(f'Canonical {parsed.canonical}: {public}')
    if set(parsed.alternates)!=set(locales+['x-default']):errors.append(f'Incomplete alternates: {public}')
for route,p in pages.items():
    for locale,url in p.alternates.items():
        target=urlparse(url).path or '/'
        if target not in pages:errors.append(f'Alternate target absent: {route} -> {url}')
        elif locale!='x-default' and pages[target].lang!=locale:errors.append(f'Wrong alternate language: {url}')
    for url in p.links:
        parsed=urlparse(url)
        if parsed.scheme or parsed.netloc:continue
        target=unquote(parsed.path) or route
        if target in pages:
            if parsed.fragment and parsed.fragment not in pages[target].ids:errors.append(f'Missing anchor: {route} -> {url}')
        elif not (root/'public'/target.lstrip('/')).is_file():errors.append(f'Broken local link: {route} -> {url}')
    for src in p.images:
        path=urlparse(src).path
        if path=='/_next/image':path=parse_qs(urlparse(src).query)['url'][0]
        if path.startswith('/') and not (root/'public'/unquote(path.lstrip('/'))).is_file():errors.append(f'Missing image: {path}')
assert len(pages)==246,len(pages)
if errors:
    print('\n'.join(errors[:40]));raise SystemExit(f'{len(errors)} rendered-page issues')
print(f'{len(pages)} rendered HTML pages: language, RTL, H1, canonical, reciprocal alternates, internal links, anchors and image paths passed')
