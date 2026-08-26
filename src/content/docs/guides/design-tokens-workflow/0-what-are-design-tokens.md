---
title: What are design tokens?
description: A non-technical explanation of design tokens.
sidebar:
  order: 0
---

This is an explanation of design tokens. It is intended for **non-technical colleagues**.

Design tokens are the small, named building blocks that define the look of a product: things like **colors**, **spacing**, **font sizes**, and **shadows**, stored as **single, reusable values** instead of being typed out separately every time. Think of them like a shared paint palette and ruler for a design team.

Instead of a designer picking a shade of blue for an element, and a developer eyeballing that blue and picking a slightly different shade to what was intended, everyone points to the same named token (in this case, say, `brand-blue`) and gets the exact same color everywhere it's used.

Later down the line, when the branding changes and the project calls for a different shade of blue, the developer doesn't have to go to every place that `brand-blue` is used to update it. The designer can update the value of `brand-blue` in one place, which changes the appearance of every element in the project that uses `brand-blue`.

## The benefits of design tokens

- **Consistency**: Buttons, links, and banners across the whole product use the same blue, the same spacing, the same fonts, because they're all pulling from the same source rather than being eyeballed individually.
- **Easy updates**: If the brand color changes, someone updates the token once, and every button, header, and icon that uses it updates automatically, instead of hunting through every screen and file by hand.
- **Shared language between design and engineering**: Designers and developers can talk about "the primary button color" or "large spacing" using the same name, rather than translating back and forth between a design file and code.
- **Faster, more reliable theming**: Supporting a dark mode, a rebrand, or a white-labeled version of the product becomes a matter of swapping one set of tokens for another, rather than redoing the work from scratch.

:::note[In short...]
**Without** design tokens, making a project look right everywhere is a manual, error-prone process.

**With** design tokens, the correct values are defined once and reused consistently throughout the project.
:::

## How we use design tokens at Code

- Designers create design tokens for a project in Figma.
- They export the tokens to a project's code base, using Tokens Studio.
- Developers convert the tokens into CSS variables.
- They use the variables in a component's stylesheet.

## Further reading

- [Atlassian: Design tokens explained](https://atlassian.design/foundations/tokens/design-tokens)
- [Contentful: Design tokens explained (and how to build a design token system)](https://www.contentful.com/blog/design-token-system/)