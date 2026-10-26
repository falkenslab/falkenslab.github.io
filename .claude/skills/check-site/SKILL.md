---
name: check-site
description: Check the landing page (site/) before pushing or after publishing - every project link answers, the page in light and dark, in English and Spanish, at desktop and phone width, with screenshots from headless Chrome, and the live site once Pages has deployed. Use after any change to site/, before a commit, or when the person asks whether the site is fine.
---

# Checking the landing page

Run the scripts from the repository root. Put screenshots in the scratchpad, never in the repository.

## 1. Links

```bash
bash .claude/skills/check-site/links.sh
```

It reads the names in `PROJECTS` and `MORE` from `site/site.js`, checks each project's site and repository, and exits with 1 if any of them doesn't answer 200. A project's site that fails may still be deploying: check its repository's Actions before removing its card.

## 2. Screenshots

```bash
bash .claude/skills/check-site/screenshots.sh "<scratchpad>/shots"
```

It writes `light-en.png` and `dark-es.png` (1280px) and `phone-es.png` (400px). The phone capture is taken inside an iframe, because headless Chrome won't make a window narrower than about 500px: a capture at `--window-size=400` looks cut off when it isn't. Set `CHROME` if Chrome isn't at its default Windows path.

Read each image and check:

- **Both themes**: no color left over from the other theme. Every logo is visible, especially the dark variants (`.only-dark`) and the flask in the top bar. The coral reads well on both backgrounds.
- **Both languages**: every text has switched (the headings, chips, `kind` lines, tags and `MORE`), and the Spanish has its accents.
- **Phone**: one column, no horizontal scroll, the language and theme switches still in the top bar, and the chips wrapping onto two lines.
- **Cards**: descriptions fit in four lines (`-webkit-line-clamp: 4`). If one gets cut in the middle of an idea, shorten it rather than raising the clamp.

## 3. The live site

After a push, wait for the Pages workflow (`gh run watch $(gh run list --workflow pages.yml --limit 1 --json databaseId --jq '.[0].databaseId') --exit-status`), then:

```bash
curl -s "https://falkenslab.github.io/?x=$RANDOM" | grep -o '<title>[^<]*</title>'   # <title>Falken's Lab</title>
for p in site.css site.js img/logo.svg social-card.png; do curl -s -o /dev/null -w "%{http_code} $p\n" "https://falkenslab.github.io/$p"; done
```

If the title is `Falken’s Lab | …` and the assets return 404, GitHub is serving the repository root through Jekyll. Pages has fallen back to `legacy`: run `gh api -X PUT repos/falkenslab/falkenslab.github.io/pages -f build_type=workflow`, then run the workflow again.

The screenshot script also takes a URL as its second argument, to capture the live site: `screenshots.sh <folder> https://falkenslab.github.io/`.
