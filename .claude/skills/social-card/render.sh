#!/usr/bin/env bash
# Renders card.html into site/social-card.png (1280x640) with headless Chrome.
# Usage: bash .claude/skills/social-card/render.sh   (from the repository root)
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd -W 2>/dev/null || pwd)"
root="$(cd "$(dirname "$0")/../../.." && pwd -W 2>/dev/null || pwd)"
chrome="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"
# --virtual-time-budget leaves time for the Google fonts to load before the capture.
"$chrome" --headless=new --disable-gpu --hide-scrollbars --virtual-time-budget=4000 --window-size=1280,640 \
  --screenshot="$root/site/social-card.png" "file:///$here/card.html" 2>/dev/null
echo "$root/site/social-card.png"
