"""
Screenshot automation for AJ Liquid Waste Haulers Hugo site review.
Captures full-page screenshots at 4 breakpoints across representative pages.

Prerequisites:
  pip install playwright
  playwright install chromium

Usage:
  1. Start Hugo: cd site && hugo server --bind 0.0.0.0 --port 1313
  2. Run: python screenshots/take_screenshots.py
"""

from playwright.sync_api import sync_playwright
import os

output_dir = os.path.dirname(os.path.abspath(__file__))

viewports = [
    {"name": "desktop-1440", "width": 1440, "height": 900},
    {"name": "desktop-1024", "width": 1024, "height": 768},
    {"name": "tablet-768", "width": 768, "height": 1024},
    {"name": "mobile-375", "width": 375, "height": 812},
]

pages = [
    {"path": "/", "prefix": "homepage"},
    {"path": "/about/", "prefix": "about"},
    {"path": "/contact/", "prefix": "contact"},
    {"path": "/faq/", "prefix": "faq"},
    {"path": "/services/", "prefix": "services-index"},
    {"path": "/services/septic-tank-pumping/", "prefix": "service-detail"},
    {"path": "/service-area/", "prefix": "service-area-hub"},
    {"path": "/service-area/dripping-springs/", "prefix": "city-dripping-springs"},
    {"path": "/how-we-work/", "prefix": "how-we-work"},
]

base_url = "http://localhost:1313"

with sync_playwright() as p:
    browser = p.chromium.launch()
    for page_config in pages:
        for vp in viewports:
            page = browser.new_page(viewport={"width": vp["width"], "height": vp["height"]})
            url = f"{base_url}{page_config['path']}"
            try:
                page.goto(url, wait_until="networkidle", timeout=10000)
            except Exception as e:
                print(f"WARN {url} @ {vp['name']}: {e}")
            page.wait_for_timeout(800)
            filename = f"{page_config['prefix']}-{vp['name']}.png"
            path = os.path.join(output_dir, filename)
            page.screenshot(path=path, full_page=True)
            print(f"Saved: {filename}")
            page.close()
    browser.close()
print("Done.")
