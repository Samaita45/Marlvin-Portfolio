# Project Images

Add screenshots here to show on project cards in the portfolio.

## How to add an image

1. Save your screenshot as JPG or PNG (recommended: **1200×675** or **16:9** ratio)
2. Name it to match the project id, for example:
   - `gardening-website.jpg`
   - `catering-website.jpg`
   - `water-quality.jpg`
   - `dairy-farm.jpg`
   - `farmer-marketplace.jpg`
3. Update `src/data/projects.ts` and set the `image` field:

```ts
image: '/projects/gardening-website.jpg',
```

4. Optionally set `imageAlt` for accessibility:

```ts
imageAlt: 'Deep Waters Garden Services website homepage',
```

## Tips

- Use **WebP** or **JPG** for photos (keep under ~300KB for fast loading)
- Take screenshots from your live demo or Figma/design files
- PNG works best for desktop app UI screenshots

Current placeholder SVGs will show until you add your own images.
