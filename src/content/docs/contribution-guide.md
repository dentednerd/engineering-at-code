---
title: Contributing
description: A guide to writing docs for this hub.
---

Every engineer at Code is welcome to add and update docs in this hub.

## Adding and updating docs

1. At the moment, this is hosted on Github. On Slack, DM your Github handle to Joey to be granted contributor access.
2. Clone the repo from [github.com/dentednerd/engineering-at-code](https://github.com/dentednerd/engineering-at-code).
3. Setup locally:

```sh
cd engineering-at-code
npm i
npm run dev # Starts local dev server at http://localhost:4321
```

4. Add Markdown docs to the appropriate subfolder in `src/content/docs`. Feel free to use one of the templates in the `templates` folder. If not, don't forget to add frontmatter at the top of each file, as follows:

```md
---
title: Doc Title
description: What this doc is about.
---
```

5. Open a pull request and let folks know about it in the `#code-development` Slack channel.

## Further reading

- [Authoring Content in Markdown](https://starlight.astro.build/guides/authoring-content/)
- [The Good Docs Project](https://thegooddocsproject.dev/)
- [Google Developers: Technical Writing course](https://developers.google.com/tech-writing/overview)