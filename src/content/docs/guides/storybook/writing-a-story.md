---
title: Writing a story
description: How to write a story for a component in Storybook.
sidebar:
  order: 1
---

This is a guide to writing stories for components using Storybook. It is intended for **developers**.

Story files live alongside component files, like so:

```
atoms
├─ Button
│  ├─ Button.tsx
│  ├─ Button.stories.tsx
│  ├─ ...
```

Stories are written in [Component Story Format](https://storybook.js.org/docs/api/csf). The default export is the meta which describes the component. Named exports describe the stories themselves.

## An example story file

Below is an example of a story file for a `Button` component:

```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
    disabled: true,
  },
};
```

:::note[How each section works]

- `meta`, the default export, configures the component as a whole: its title and location in the sidebar, the component reference, and shared `argTypes`.
- The named exports, `Primary` and `Disabled`, are individual stories. Each story's `args` describes the props for that state. It’s best to have one story per meaningfully distinct state, rather than one giant story with every possible prop combination.
- `args` are Storybook's version of props. They drive both the rendered output and the auto-generated Controls panel.

:::

## Best practices

- Create a story for each distinct variant and state that a component can take.
- Limit each story to a single use case; complex stories are as difficult to use as they are to construct.

## Further reading

- [Storybook: How to write stories](https://storybook.js.org/docs/writing-stories)