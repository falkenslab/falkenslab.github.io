---
name: add-project
description: Add, update or remove a Falken's Lab project on the landing page (falkenslab.github.io) - its card in PROJECTS or its line in MORE, its logo, its texts in English and Spanish, its categories and tags - checked and published. Use when the person asks to feature, add, change, reorder or drop a project, or when a falkenslab repository gets its own site.
---

# Adding a project to the landing page

The cards are data in `site/site.js`; `index.html` doesn't change. Read `CLAUDE.md` first for how the page works.

## 1. Learn the project

From its repository (the local clone at `../<name>`, else `gh repo view falkenslab/<name>`):

- **Its exact repository name.** The card builds both links from it: `https://falkenslab.github.io/<name>/` and `https://github.com/falkenslab/<name>`.
- **Whether it has its own site**: `curl -s -o /dev/null -w '%{http_code}' https://falkenslab.github.io/<name>/`. A 200 means it gets a card in `PROJECTS`. Without a site, it gets a line in `MORE`, or ask the person.
- **Its promise**: the bold line(s) of its README's hero, or the repository's description. The card's `desc` says the same thing in one or two sentences. Don't invent features.
- **Its logo**: the docs site's mark (`docs/static/img/logo.svg`, or `logo-mark.svg` when `logo.svg` is a wide wordmark), plus a dark variant (`logo-dark.svg`, `logo-mark-dark.svg`) when there is one. A logo drawn on its own square background needs no dark variant.

## 2. Add it

1. Copy the logo to `site/img/<name>.svg`, and the dark variant to `site/img/<name>-dark.svg`.
2. Add an entry to `PROJECTS`, in the position where the card should show (the order is the order of the array):

   ```js
   {
     name: "<repo>", logo: "img/<repo>.svg", logoDark: "img/<repo>-dark.svg", categories: ["mcp", "moodle"],
     kind: { en: "MCP server", es: "Servidor MCP" },
     desc: { en: "…", es: "…" },
     tags: ["Moodle", "MCP", { en: "Privacy", es: "Privacidad" }],
   },
   ```

   - `logoDark` only when there is a dark file.
   - `categories` are keys of `TEXTS.*.categories`. A new category needs its label in both languages; its chip shows up only once some project uses it.
   - `kind` is short (2–4 words), written in the `.kind` mono line. Reuse the existing ones ("MCP server", "Library", "Library and CLI").
   - Two or three tags. A product or technology name (`Moodle`, `TypeScript`) stays a plain string. A common word is `{ en, es }`.
   - The Spanish is natural Spanish with full accents, not a word-for-word translation.
3. A project without its own site: `{ name, desc: { en, es } }` in `MORE`.
4. Nine cards fill three rows of three at 1280px. When a tenth card comes in, ask whether one of the others should move to `MORE`.

## 3. Check and publish

1. Run the `check-site` skill: links, screenshots in both themes, both languages and a phone's width. Make sure the new logo reads well in the dark theme.
2. Commit (`Add <name> to the landing page`) and push to `main` when the person asks. The Pages workflow publishes it, and `curl` should show the new card's logo with a 200 on the live site.
3. If the change affects what the social card says (a new area of work, not just one more project), mention the `social-card` skill.
