---
title: Contributing
description: A guide to writing docs for this hub.
---

Every engineer at Code is welcome to add and update docs in this hub.

## Adding and updating docs

1. Contact Joey to be added as a contributor to [https://github.com/dentednerd/engineering-at-code](https://github.com/dentednerd/engineering-at-code).
2. Setup locally:

```sh
git clone https://github.com/dentednerd/engineering-at-code.git
cd engineering-at-code
npm i
npm run dev # Starts local dev server at http://localhost:4321
```

3. Add Markdown docs to the appropriate subfolder in `src/content/docs`. Don't forget to add frontmatter at the top of each file, as follows:

```md
---
title: Doc Title
description: What this doc is about.
---
```

4. Open a pull request and let folks know about it in the `#code-development` Slack channel.

## Further reading

- [Authoring Content in Markdown](https://starlight.astro.build/guides/authoring-content/)
- [The Good Docs Project](https://thegooddocsproject.dev/)
- [Google Developers: Technical Writing course](https://developers.google.com/tech-writing/overview)