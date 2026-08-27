# Unified Service View — Case Study

A self-contained, single-file case study page for the [Unified Service View](https://github.com/jestinpresley-sys/VSF-Integrated) concept prototype — a one-search-bar Customer Care tool for Varsity Spirit, covering the brief, what it does, the decisions behind it, and the pitch built around it.

**View it:** open `index.html` directly in a browser — no server needed, both exhibit screenshots are inlined.

## Structure

```
index.html                        the built, self-contained page (what you publish/share)
src/
  case-study-template.html        source template — edit this, not index.html
  build.js                        inlines the exhibit screenshots into index.html
assets/
  screenshots/                    the 2 exhibit screenshots, embedded as data URIs
```

## Editing

1. Edit `src/case-study-template.html`. Image placeholders look like `__IMG_01__`.
2. Rebuild:
   ```bash
   node src/build.js
   ```
3. `index.html` is regenerated in place.

Screenshots were captured from the working prototype via headless Chrome, then cropped with Pillow to frame each exhibit. All customer and order data shown is fictional sample data.
