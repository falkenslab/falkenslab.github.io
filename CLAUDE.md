# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The landing page of the Falken's Lab organization (https://falkenslab.github.io/): a static, hand-written site in `site/` that showcases the lab's projects. There is no build step, no package.json and no tests.

## Developing and publishing

- Preview: open `site/index.html` in a browser, or serve it with `npx serve site`. Check both languages (`?lang=en`, `?lang=es`), the light and dark themes, and a phone's width (about 400px) before pushing.
- Publishing: `.github/workflows/pages.yml` uploads `site/` to GitHub Pages on every push to `main` (it can also be run by hand with `gh workflow run pages.yml`). Pages must stay on the `workflow` build type. With `legacy`, GitHub would publish the repository root, which is the README rendered by Jekyll.
- This is the organization's root site. Each project's own site is served from its own repository at `falkenslab.github.io/<repo>/`, so never add a `site/<repo>/` folder that would shadow one.

## How the page works

- `index.html` is a shell. Every visible text is filled in by `site.js` from `TEXTS[lang][key]` through `data-text="key"` attributes. The English in the HTML is only a fallback. A text added to the page needs a key in both `TEXTS.en` and `TEXTS.es`. Only the `intro` key is set as HTML.
- The project cards, the filter chips and the "More from the lab" list are rendered from `PROJECTS` and `MORE` in `site.js`. Each card links to `https://falkenslab.github.io/<name>/` and to `https://github.com/falkenslab/<name>`, so `name` must be the repository's exact name. `kind` and `desc` are `{ en, es }`. A tag that is a plain word (not a product name) is `{ en, es }` too. A chip shows up only when some project uses its category key from `TEXTS.*.categories`.
- To add a project: copy its logo to `site/img/<name>.svg` (and `<name>-dark.svg`, set as `logoDark`, when it has a dark variant), then add its entry to `PROJECTS`. A smaller repository without its own site goes in `MORE`. Take the descriptions from the project's README promise rather than writing new claims.
- Theme: light, dark or the system's. A small inline script in the `<head>` applies the stored `theme` before the page paints. Dark-variant logos switch with the `.only-light` and `.only-dark` classes, which follow both the media query and `data-theme`.
- The lab's mark (the flask from falkens-notebook) is `site/img/logo.svg` for the favicon. In the top bar it is inlined as an SVG with `fill="currentColor"`.
- `site/social-card.png` (1280×640) is used for Open Graph and is also the repository's social preview. Its source is `.claude/skills/social-card/card.html`. GitHub has no API for the preview: it has to be uploaded again in Settings → Social preview whenever the card changes.

## Project skills

- `add-project`: add, change, reorder or remove a project card (or a `MORE` line).
- `check-site`: link check and headless-Chrome screenshots (themes, languages, phone), and checking the live site after a deploy.
- `social-card`: edit, render and publish the social card, including the repository's preview.

## Conventions

- Visual style: the `falkenslab-site-style` skill (the agent-extensions family). Colors are tokens on `:root`, redefined for dark under both `prefers-color-scheme` and `[data-theme="dark"]`. Never put a literal color in a component rule. The accent is always coral.
- Content: the `falkenslab-docs` skill. The footer is only "Made with 💖 by Falken's Lab Team", with no license or copyright line. The README is in English.
