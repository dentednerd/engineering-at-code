---
title: Interaction tests
description: When and how to implement interaction tests in Storybook.
sidebar:
  order: 4
---

This is a guide to implementing interaction tests in Storybook. It is intended for **developers**.

Interaction tests simulate user behaviour inside a story and assert on the outcome, using the `play` function together with `@storybook/test`, which wraps Testing Library and `expect`.

## Setup

The testing modules are included by default in recent Storybook versions. If they’re not available in your version, and you're unable to upgrade Storybook, install them:

```bash
npm install --save-dev @storybook/addon-interactions @storybook/test
```

Register the addon in `.storybook/main.ts`:

```ts
export default {
  addons: ['@storybook/addon-interactions'],
};
```

## Usage

Interaction tests live in a story's `play` function, which runs after the story renders.

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'Components/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const ValidationError: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Submit the form without filling anything in
    await userEvent.click(canvas.getByRole('button', { name: /log in/i }));

    // Assert the error message appears
    await expect(
      canvas.getByText(/email is required/i)
    ).toBeInTheDocument();
  },
};
```

:::note[How it works]

- `play` is an async function that runs after the story renders. It's where you script interactions.
- `within(canvasElement)` scopes Testing Library queries to the rendered story, not the whole document.
- `userEvent` simulates real user input (clicks, typing, keyboard navigation) more realistically than firing raw DOM events.
- `expect` makes assertions on the result.

:::

Interaction tests run live in the Storybook UI (visible step-by-step in the Interactions panel) and can also run headlessly in CI via the Storybook test runner:

```sh
npx test-storybook
```

This makes stories double as both documentation and a lightweight component-level test suite, catching regressions in behavior — not just appearance — as part of your normal PR workflow.

## Best practices

- Save the interaction tests for complex components, such as forms. Only use interaction tests when visual testing would be too intensive.
- Interaction tests don't replace unit tests.

## Further reading

- [Storybook: Interaction testing](https://storybook.js.org/docs/writing-tests/interaction-testing)