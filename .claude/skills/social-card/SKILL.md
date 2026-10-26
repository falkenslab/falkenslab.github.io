---
name: social-card
description: Change or regenerate the landing page's social card (site/social-card.png, 1280x640) from its HTML source, and set it as the falkenslab.github.io repository's social preview on GitHub. Use when the person wants the card's text or look changed, when the page's promise changes, or when the repository's preview must be updated.
---

# The social card

`site/social-card.png` is the Open Graph and Twitter image of https://falkenslab.github.io/ (see the `og:image` tags in `site/index.html`). It is also the repository's social preview on GitHub. Its source is `card.html` in this folder.

## 1. Change it

Edit `card.html`. It follows the family's look in its dark theme: background `#0b0d12`, the coral glow at the top, the "Falken's Lab" eyebrow in `#ff6b57`, the title in Inter 900, the line under it in `#b3bac7`, and the URL in JetBrains Mono. The flask is the `<g>` of `site/img/logo.svg`, inline with `fill="currentColor"`.

- The card is in English, like the README and the page's `og:` tags.
- Keep its title and line the same as the page's (`TEXTS.en.title`, the `og:description`), and change them together.
- Leave it legible as a thumbnail: one title and one line, no list of projects.

## 2. Render it

```bash
bash .claude/skills/social-card/render.sh
```

Headless Chrome writes it to `site/social-card.png`. Read the image: the fonts must have loaded (Inter, not a system font), and the text must not touch the edges. If the fonts are missing, render again: `--virtual-time-budget` gives them 4 seconds.

## 3. Publish it

1. Commit and push when the person asks. The page's card updates with the Pages deploy. Sites like Slack or X cache the old image for a while.
2. **The repository's social preview doesn't follow the file.** GitHub has no API for it, so upload it again:
   1. In the person's Chrome (the `chrome-browser` skill), open `https://github.com/falkenslab/falkenslab.github.io/settings`.
   2. Find the "Upload an image…" file input under **Social preview** and give it `site/social-card.png` with the file-upload tool. Don't click the input: that opens the system's file picker.
   3. Check it: `gh api graphql -f query='{repository(owner:"falkenslab",name:"falkenslab.github.io"){usesCustomOpenGraphImage openGraphImageUrl}}'` should report `true`, with a new `openGraphImageUrl`.
   4. Close the tab you opened.
