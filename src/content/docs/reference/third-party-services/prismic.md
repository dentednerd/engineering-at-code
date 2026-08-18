---
title: Prismic
description: A reference page about Prismic, the headless CMS.
---

[Prismic](https://prismic.io) is a headless CMS with a visual page builder. It lets content teams create, update, and publish pages independently, while developers define the underlying content structure (page types, fields, and reusable "slices") and build the frontend in their framework of choice. Content is served via API (REST or GraphQL) rather than rendered by the CMS itself.

## What it does

- Provides a **dashboard** listing your **repositories** (one per website), each containing your website's content and configuration.
- Offers a **Page Builder** where editors create, edit, translate, preview, and publish pages using fields configured by developers.
- Lets developers model content with **page types**, **custom types**, and **fields** (text, rich text, image, link, etc.) via a visual Type Builder or the Prismic CLI.
- Uses **slices** — reusable, developer-built page sections (heroes, testimonials, CTAs, etc.) — that editors compose and reorder in the Page Builder to build pages without needing a developer for every change.
- Ships **first-class SDK integrations** for Next.js, Nuxt, and SvelteKit, plus general-purpose SDKs for other stacks, all with TypeScript support.
- Supports **multi-locale content**, live/full-site previews, content migrations, and image optimization (via an Imgix partnership).

## Key concepts

- **Repository**: the container for a single website's content and configuration; everything else (page types, slices, documents) lives inside one.
- **Page type / Custom type**: a developer-defined content structure (a set of fields) that documents are created from, e.g. "Blog Post" or "Homepage."
- **Slice**: a reusable, self-contained page section (e.g. hero, testimonial, CTA) that developers build as a component and editors stack together in the Page Builder to compose a page.
- **Field**: an individual content input within a type or slice, such as a text field, rich text field, image field, or link field.
- **Document**: an individual piece of content (e.g. one blog post or one page) created from a page/custom type.
- **Draft vs. Published**: documents are saved as drafts (visible only to editors) until explicitly published, at which point they go live via the API.
- **Preview**: a mechanism, set up by developers, that lets editors see draft content rendered on the live site template before publishing.
- **Locale**: Prismic supports multiple language/region variants of content, with a designated master locale per repository.
- **Content API**: the REST/GraphQL API through which frontend code queries and renders published (or previewed) content.

## Getting started

1. Create a Prismic account and repository at prismic.io.
2. Model your content: define page types and build slices, using the Type Builder in the dashboard or the Prismic CLI (`npx prismic ...`).
3. Connect a frontend framework (Next.js, Nuxt, or SvelteKit are officially supported) using the relevant SDKs — e.g. `@prismicio/client`, `@prismicio/react`, `@prismicio/next` for Next.js.
4. Fetch content in code with the client SDK and render slices with a component like `<SliceZone />`.
5. Editors then work entirely in the Page Builder — saving drafts, previewing, and publishing — without touching code.

Example (Next.js):

```tsx
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page({ params }: PageProps<"/[uid]">) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid);

  return <SliceZone slices={page.data.slices} components={components} />;
}
```

## Further reading

- [Prismic docs](https://prismic.io/docs)
