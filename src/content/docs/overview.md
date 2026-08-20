---
title: Overview
description: An overview of this hub.
---

[Engineering at Code](/) is our documentation hub, where we describe how we do what we do.

## Architecture

Engineering at Code is built in [Astro](https://astro.build/), using the [Starlight](https://starlight.astro.build/) template. All the design elements are abstracted away from the project itself; all we need to be concerned with is the `src/content/docs` folder, where we place our documentation, and the Starlight integration in `astro.config.mjs`, in which we can configure the sidebar.

## Structure

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## Further reading

- [Starlight docs](https://starlight.astro.build/)
- [Astro docs](https://docs.astro.build)
- [Astro Discord server](https://astro.build/chat)
