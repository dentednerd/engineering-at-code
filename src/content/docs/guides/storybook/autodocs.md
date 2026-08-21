---
title: Autodocs
description: How the autodocs feature in Storybook works.
sidebar:
  order: 2
---

This is a guide to using Storybook's autodocs feature. It is intended for **developers**.

Storybook's autodocs feature generates a documentation page for a component automatically, pulling from your stories, `argTypes`, JSDoc comments, and TypeScript types.

To enable autodocs, add the string 'autodocs' to the `meta.tags` array, as follows:

```tsx
const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
  tags: ['autodocs'], // enables the docs page for this component
};
```

In Storybook, under "Button", you'll see a new stories entitled "Docs".

:::note[What's on an autodocs page?]

- A **live preview** of the primary story, the first named export in the stories file.
- A **Controls table** listing every prop, its type, default value, and description. These details are pulled from TypeScript types and JSDoc comments on the component.
- A canvas showing **all other stories** for the component.
- Any **JSDoc comments** that you've added to the component, as a description.

:::

## Best practices

- Sometimes the Controls table automatically lists a prop that isn't useful or safe to access in the context of Storybook, such as IDs or access tokens. To hide a prop from the Controls table, add the following to `meta.argTypes`:

```tsx
const meta: Meta<typeof Component> = {
  ...,
  argTypes: {
    propToHide: {
      table: {
        disable: true,
      },
    },
  },
};
```

## Further reading

- [Storybook: Automatic documentation and Storybook](https://storybook.js.org/docs/writing-docs/autodocs)