#!/usr/bin/env bash
# Captures the page with headless Chrome: light/English and dark/Spanish at 1280px, and Spanish at a
# phone's 400px (inside an iframe: headless Chrome won't make a window narrower than about 500px).
# Usage: bash .claude/skills/check-site/screenshots.sh <output folder> [page url]
set -euo pipefail
out="${1:?output folder}"
mkdir -p "$out"
out="$(cd "$out" && pwd -W 2>/dev/null || pwd)"
root="$(cd "$(dirname "$0")/../../.." && pwd -W 2>/dev/null || pwd)"
url="${2:-file:///$root/site/index.html}"
chrome="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"
shot() { "$chrome" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files --virtual-time-budget=3000 "$@" 2>/dev/null; }

# preferredColorScheme: 0 dark, 1 light (the system's, as the page's "system" theme follows it).
shot --blink-settings=preferredColorScheme=1 --window-size=1280,2400 --screenshot="$out/light-en.png" "$url?lang=en"
shot --blink-settings=preferredColorScheme=0 --window-size=1280,2400 --screenshot="$out/dark-es.png" "$url?lang=es"
cat > "$out/phone.html" <<HTML
<!doctype html><body style="margin:0;background:#888"><iframe src="$url?lang=es" style="width:400px;height:3400px;border:0"></iframe></body>
HTML
shot --blink-settings=preferredColorScheme=1 --window-size=600,3400 --screenshot="$out/phone-es.png" "file:///$out/phone.html"
ls "$out"/*.png
