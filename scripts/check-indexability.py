"""Audit the sitemap's final URLs and HTML indexing directives over HTTP."""
import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
from html.parser import HTMLParser
import json
import re
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET


class Metadata(HTMLParser):
    def __init__(self):
        super().__init__()
        self.robots = []
        self.canonical = []
        self.lang = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "html":
            self.lang = attrs.get("lang")
        if tag == "meta" and attrs.get("name", "").lower() in ("robots", "googlebot"):
            self.robots.append(attrs.get("content", ""))
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonical.append(attrs.get("href", ""))


def request(url):
    try:
        with urlopen(Request(url, headers={"User-Agent": "ARDIC-Indexability-Audit/1.0"}), timeout=30) as response:
            return response.status, response.url, dict(response.headers.items()), response.read().decode("utf-8", errors="replace")
    except HTTPError as error:
        return error.code, error.url, dict(error.headers.items()), error.read().decode("utf-8", errors="replace")


def audit(url, base):
    target = urljoin(base, urlparse(url).path)
    try:
        status, final, headers, html = request(target)
        metadata = Metadata()
        metadata.feed(html)
        robots_header = next((value for key, value in headers.items() if key.lower() == "x-robots-tag"), "")
        issues = []
        if status != 200:
            issues.append(f"HTTP {status}")
        if final != target:
            issues.append(f"Redirects to {final}")
        if any(re.search(r"(?:^|[:,\s])(?:noindex|none)(?:$|[,\s])", directive, re.I) for directive in [robots_header, *metadata.robots]):
            issues.append("Indexing blocked")
        if metadata.canonical != [url]:
            issues.append(f"Canonical mismatch: {metadata.canonical}")
        if not metadata.lang:
            issues.append("HTML language missing")
        return {"url": url, "status": status, "final": final, "robots": metadata.robots, "x_robots_tag": robots_header, "canonical": metadata.canonical, "language": metadata.lang, "issues": issues}
    except Exception as error:
        return {"url": url, "issues": [str(error)]}


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base", default="https://www.ardicdf.com")
    parser.add_argument("--output")
    args = parser.parse_args()
    status, final, headers, xml = request(args.base.rstrip("/") + "/sitemap.xml")
    if status != 200:
        raise SystemExit(f"Sitemap HTTP {status}")
    urls = [element.text for element in ET.fromstring(xml).findall("{*}url/{*}loc")]
    if not urls or len(urls) != len(set(urls)):
        raise SystemExit("Empty sitemap or duplicate URLs")
    results = []
    print(f"Checking {len(urls)} sitemap URLs at {args.base}", flush=True)
    with ThreadPoolExecutor(max_workers=6) as pool:
        futures = [pool.submit(audit, url, args.base) for url in urls]
        for future in as_completed(futures):
            result = future.result()
            results.append(result)
            if result["issues"]:
                print(json.dumps(result, ensure_ascii=False), flush=True)
            elif len(results) % 30 == 0:
                print(f"Checked {len(results)}/{len(urls)}", flush=True)
    results.sort(key=lambda item: item["url"])
    report = {"base": args.base, "sitemap": final, "pages": len(urls), "failed": sum(bool(item["issues"]) for item in results), "results": results}
    if args.output:
        Path(args.output).write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(f"{len(urls)} pages; {report['failed']} failures", flush=True)
    raise SystemExit(bool(report["failed"]))
