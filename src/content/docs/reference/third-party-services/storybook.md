---
title: Storybook
description: A reference page about Storybook, the frontend workshop.
---

[Storybook](https://storybook.js.org) is an open-source frontend workshop for building, testing, and documenting UI components and pages in isolation. It lets teams develop and share hard-to-reach component states and edge cases without needing to run the whole app, and is framework-agnostic — supporting React, Vue, Angular, Svelte, and more, plus community-maintained integrations for others (including mobile via React Native, Android, iOS, and Flutter).

## What it does

- Provides an isolated, separate app alongside your codebase where you build and preview components independently of your main application.
- Generates automatic documentation from your components and stories, useful for design system sites and UI library usage guides.
- Supports testing components directly from your stories, giving a low-effort starting point for a UI testing strategy.
- Offers a large addon ecosystem for component design, documentation, accessibility, interactivity, and testing, plus an API for building custom addons.
- Lets you publish a built Storybook to share with others, including embedding stories in tools like Notion or Figma.

## Installation

Install into an existing project, or scaffold a new one:

```bash
npx storybook@latest init
```

This detects your framework and sets up configuration, example stories, and commonly used addons automatically. Once installed, run the local dev server (typically `npm run storybook`) to open the Storybook UI in your browser.

## Key concepts

- **Story**: the fundamental building block of Storybook: a function that represents a single state of a component, usually defined in a file ending `*.stories.ts`/`.tsx`/`.js`.
- **Component Story Format (CSF)**: the file format used to write stories, based on ES modules, with a default export (metadata like the component and title) and named exports (individual stories).
- **Args**: the props/inputs passed to a component within a story, which can be changed interactively via Storybook's Controls addon.
- **Autodocs**: automatically generated documentation pages built from a component's stories and metadata, or manually authored using MDX.
- **Addons**: plugins that extend Storybook's UI and capabilities, e.g. for accessibility checks, viewport testing, interaction testing, or design tool integration.
- **Decorators**: wrapper functions that apply consistent context or styling (e.g. theming, layout) around stories.
- **Composition** — combining multiple Storybooks together, so components from different projects or teams can be viewed side by side.
- **Publishing** — deploying a built Storybook as a static site, so it can be shared with a wider team or embedded elsewhere.

> We published the Storybook for the Elevate project here: [storybook.hdelevate.eu](https://storybook.hdelevate.eu/)

## Further reading

- [Storybook documentation](https://storybook.js.org/docs)
