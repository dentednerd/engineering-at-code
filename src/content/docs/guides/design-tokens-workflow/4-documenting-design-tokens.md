---
title: Documenting design tokens
description: A guide to documenting design tokens and their usage in Storybook.
sidebar:
  order: 4
---

This is a guide to documenting design tokens and their usage in Storybook. It is intended for **developers**.

If you've set up [themes in Storybook](/guides/storybook/themes/), you'll know that Storybook has access to every token in your design system. We're able to harness native Storybook capabilities to document all of our tokens per theme.

:::note[The benefits of documenting design tokens in Storybook]

- It's easy to see a token's value when it's rendered. Designers and developers can see at a glance whether a token "looks right".
- Documentation helps with catching drift between design and implementation.
- Seeing tokens laid out next to their use cases encourages their consistent use throughout the project.
- The tokens documentation becomes a living changelog for design decisions.

:::

:::caution[Fair warning: This will take some time to set up.]
Setting this up is a manual and sometimes tedious process. The good news is that it doesn't require much maintenance when it's done. To keep this documentation up to date:

- add a design tokens story to a new component as it's being created
- add a new alias token to the appropriate alias category story

:::

## To-do list

The tasks required to set up this documentation are:

1. Create a tokens story template, to be used by all tokens stories.
2. Create stories for alias-level tokens.
3. Create stories for component-level tokens.
4. Import the component-level tokens stories into individual component stories

Completing these tasks will lead to:

- A new section on the Storybook sidebar for tokens stories, with subsections for alias tokens and component tokens
- New stories for each component that uses design tokens, displaying the tokens that the component uses

## 1. Tokens story template

`TokensStoryTemplate` is used in all tokens stories. Depending on the set of variables passed to it, it conditionally renders a `<div>` that displays those tokens in a visually friendly way.

As it's used by many components, the recommended place to store `tokens-story-template.tsx` is in your `components` folder, outside of the atomic structure.

:::note[What's the prefix `arg`?]
Every token in a particular category will share the same prefix. For example, all colour-related alias tokens in the Elevate project have the prefix `--hd-alias-color-`.

`prefix` is concatenated with each of the vars passed into the template to create full CSS variables.
:::

```tsx
//tokens-story-template.tsx
export type TokensStory = {
  prefix: string;
  colorVars: string[];
  fontFamilyVars: string[];
  fontSizeVars: string[];
  fontWeightVars: string[];
  lineHeightVars: string[];
  textCaseVars: string[];
  letterSpacingVars: string[];
  spacingVars: string[];
  borderRadiusVars: string[];
};

export const TokensStoryTemplate = {
  render: ({
    prefix,
    colorVars,
    fontFamilyVars,
    fontSizeVars,
    fontWeightVars,
    lineHeightVars,
    textCaseVars,
    letterSpacingVars,
    spacingVars,
    borderRadiusVars,
  }: TokensStory) => (
    <>
      {colorVars && (
        <div style={{ padding: '2rem', inlineSize: '100%' }}>
          {colorVars.map((color: string) => (
            <div
              key={color}
              style={{
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center',
                marginBlockEnd: '1px',
              }}
            >
            <div
              style={{
              backgroundColor: `var(${prefix}${color})`,
              blockSize: 'var(--hd-alias-spacing-700)',
              marginInlineEnd: '1rem',
              aspectRatio: '1',
              border: 'solid 1px #aaa',
              }}
            />
            <p>{`${prefix}${color}`}</p>
          </div>
          ))}
        </div>
      )}
      {fontFamilyVars && (
        <div style={{ padding: '2rem', inlineSize: '100%' }}>
          {fontFamilyVars.map((family: string) => (
            <h2
              style={{ fontFamily: `var(${prefix}${family})` }}
            >
              {`${prefix}${family}`}
            </h2>
          ))}
        </div>
      )}
      {fontSizeVars && (
        <div style={{ padding: '2rem', inlineSize: '100%' }}>
          {fontSizeVars.map((size: string) => (
            <p
            style={{
              fontSize: `calc(var(${prefix}${size}) * 1px)`,
            }}
            >{`${prefix}${size}`}</p>
          ))}
        </div>
      )}
      {fontWeightVars && (
        <div style={{ padding: '2rem', inlineSize: '100%' }}>
          {fontWeightVars.map((weight: string) => (
            <p
            style={{ fontWeight: `var(${prefix}${weight})` }}
            >{`${prefix}${weight}`}</p>
          ))}
        </div>
      )}
      {lineHeightVars && (
        <div style={{ padding: '2rem', inlineSize: '100%' }}>
          {lineHeightVars.map((height: string) => (
            <p
              style={{
                lineHeight: `var(${prefix}${height})`,
                background: '#eee',
                marginBlockEnd: '1rem',
            }}
            >{`${prefix}${height}`}</p>
          ))}
        </div>
      )}
      {textCaseVars && (
        <div style={{ padding: '2rem', inlineSize: '100%' }}>
          {textCaseVars.map((textCase: string) => (
            <p
              style={{
                textTransform: `var(${prefix}${textCase})`,
              }}
            >{`${prefix}${textCase}`}</p>
          ))}
        </div>
      )}
      {letterSpacingVars && (
        <div style={{ padding: '2rem', inlineSize: '100%' }}>
          {letterSpacingVars.map((space: string) => (
            <p
              style={{ letterSpacing: `var(${prefix}${space})` }}
            >{`${prefix}${space}`}</p>
          ))}
        </div>
      )}
      {spacingVars && (
        <div style={{ padding: '2rem', inlineSize: '100%' }}>
          {spacingVars.map((size: string) => (
            <div
              key={size}
              style={{
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center',
                marginBlockEnd: `var(${prefix}${size})`,
              }}
            >
              <div
                style={{
                blockSize: `var(${prefix}${size})`,
                aspectRatio: '1',
                marginInlineEnd: '1rem',
                border: 'dotted 1px #aaa',
                }}
              />
              <p>{`${prefix}${size}`}</p>
              </div>
          ))}
        </div>
      )}
      {borderRadiusVars && (
        <div style={{ padding: '2rem', inlineSize: '100%' }}>
          {borderRadiusVars.map((radius: string) => (
            <div
              key={radius}
              style={{
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center',
                marginBlockEnd: `var(--hd-alias-spacing-700)`,
              }}
            >
              <div
                style={{
                borderRadius: `var(${prefix}${radius})`,
                blockSize: `var(--hd-alias-spacing-700)`,
                aspectRatio: '1',
                marginInlineEnd: '1rem',
                border: 'solid 1px #aaa',
                }}
              />
              <p>{`${prefix}${radius}`}</p>
              </div>
          ))}
        </div>
      )}
    </>
  ),
};
```

## 2. Alias tokens by category

It's a good idea to split alias token stories into multiple files, as there'll be a lot of them. In Elevate, the alias tokens are divided into colour, dimension and font categories; your project might have a different division that makes sense for you.

Below is a section of a colour tokens story file with two stories, `Surface` and `Text`:

```tsx
//alias-color-tokens.tsx
const meta: Meta = {
  title: '00-tokens/Alias/Colors',
  args: {
    prefix: '--hd-alias-color-',
  },
};

export default meta;
type Story = StoryObj<TokensStory>;

export const Surface: Story = {
 ...TokensStoryTemplate,
 args: {
  colorVars: [
   'surface-primary-100',
   'surface-primary-200',
   'surface-secondary-100',
   'surface-secondary-200',
   'surface-secondary-300',
  ],
 },
};

export const Text: Story = {
 ...TokensStoryTemplate,
 args: {
  colorVars: [
   'text-primary',
   'text-secondary',
   'text-inactive',
   'text-white',
   'text-negative',
   'text-positive',
  ],
 },
};
```

:::note[Things to note]

- The title `00-tokens/Alias/Colors` creates a section on Storybook's sidebar named "00-tokens", a subsection named "Alias" and the "Colors" story within that.
- The `prefix` `arg` is kept in `meta`; it'll be used by all stories in this file.
- The `TokensStoryTemplate` is spread in each story; it's an object with a `render` function used in all stories.
- All stories in this file take the `colorVars` `arg`. For font-related stories, properties like size, weight and line height need to be represented differently, so there is a `...Vars` `arg` for each of these properties.

:::

## 3. Component tokens by atomic level

With alias tokens taken care of, we move onto the component layer of tokens. It's recommended to split component token stories up by atomic level. You'll notice that each story now starts to take multiple `...Vars` `args`.

Here's an example of an atoms story file, with a story for a CTA button atom:

```tsx
// atoms-tokens.stories.tsx
const meta: Meta = {
 title: '00-tokens/Components/Atoms',
 args: {
  prefix: '--hd-components-',
 },
};

export default meta;
type Story = StoryObj<TokensStory>;

export const CTA: Story = {
 ...TokensStoryTemplate,
  args: {
    colorVars: [
      'button-color-primary-default-background',
      'button-color-primary-default-foreground',
      'button-color-primary-default-border',
      'button-color-primary-hover-background',
      'button-color-primary-hover-foreground',
      'button-color-primary-hover-border',
      'button-color-secondary-default-background',
      'button-color-secondary-default-foreground',
      'button-color-secondary-default-border',
      'button-color-secondary-hover-background',
      'button-color-secondary-hover-foreground',
      'button-color-secondary-hover-border',
      ...
    ],
    textCaseVars: ['button-text-case'],
    fontWeightVars: ['button-font-weight'],
    fontFamilyVars: ['button-font-family'],
    lineHeightVars: ['button-line-height'],
    letterSpacingVars: ['button-letter-spacing'],
    fontSizeVars: ['button-font-size-min', 'button-font-size-max'],
    borderRadiusVars: ['button-border-radius'],
  },
};
```

## 4. Component tokens by component

With the hard work done, the final task is to import the component stories into each component's story file.

Let's take a look at how that looks for the CTA atom:

```tsx
// 01-atoms/cta/cta.stories.tsx
...
import { TokensStoryTemplate } from '~/components/tokens-story-template.tsx';
import { CTA as CTATokens } from '../../atoms-tokens.stories.tsx';

const meta: Meta<typeof ButtonComponent> = {
  title: '01-atoms/CTA',
  component: ButtonComponent,
  tags: ['autodocs'],
  ...
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

// stories for individual CTA states...

export const DesignTokens = {
 ...TokensStoryTemplate,
 args: { prefix: '--hd-components-', ...CTATokens.args },
};
```

We've created a new story for the CTA atom entitled "Design Tokens", rendering `TokensStoryTemplate` with the `args` from the `CTA` story in `atoms-tokens.stories.tsx`. We don't have to write out all those variables `args` again; Storybook allows us to import a story's args into other stories.
