#!/usr/bin/env bash
# Checks that every project in site/site.js answers: its site and its repository (PROJECTS), its repository (MORE).
# Usage: bash .claude/skills/check-site/links.sh
set -uo pipefail
root="$(cd "$(dirname "$0")/../../.." && pwd)"
fail=0
check() { code=$(curl -s -o /dev/null -w '%{http_code}' -L "$1"); printf '%s %s\n' "$code" "$1"; [ "$code" = 200 ] || fail=1; }
# The names: PROJECTS entries start with `name: "…", logo:`; MORE entries with `{ name: "…", desc:`.
for name in $(grep -oE 'name: "[^"]+", logo:' "$root/site/site.js" | cut -d'"' -f2); do
  check "https://falkenslab.github.io/$name/"
  check "https://github.com/falkenslab/$name"
done
for name in $(grep -oE '\{ name: "[^"]+", desc:' "$root/site/site.js" | cut -d'"' -f2); do
  check "https://github.com/falkenslab/$name"
done
exit $fail
