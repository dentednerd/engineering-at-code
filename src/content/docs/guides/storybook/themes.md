---
title: Themes
description: How to implement themes in Storybook.
sidebar:
  order: 5
---

This is a guide to implementing themes in Storybook. It is intended for **developers**.

Storybook has support for themes, when your project uses either a theme provider, a data attribute or a CSS class to control theming. However, our theming setup is none of those. Style Dictionary builds CSS stylesheets containing our design tokens as CSS variables, ready to use in our component CSS documents. Storybook doesn't have an in-built method of switching out stylesheets.

Our solution uses `preview.globalTypes` to add a theme switcher to the Storybook UI, and harnesses `preview.decorators` to dynamically grab the correct stylesheets based on the selected theme.

In `.storybook/preview.tsx`:

```tsx
const preview: Preview = {

  parameters: {...},

  globalTypes: {
    // Add a new globalType called "theme"
    // This will be accessible in the decorator as context.globals.theme
    theme: {
      description: 'Theme',

      // Add a new button to your toolbar from which to select your desired theme
      toolbar: {
        title: 'Theme',
        icon: 'mirror',

        // Add as many items as you have themes
        // This will need manually updating when you add a new theme
        items: [
          {
            // "value" matches the filename of the stylesheet
            // that Style Dictionary generated in public/styles/themes
            // "value" will be picked up by context.globals.theme
            value: 'themeone',
            icon: 'circle',
            title: 'Theme One',
          },
          {
            value: 'themetwo',
            icon: 'circle',
            title: 'Theme Two',
          },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    // Set "theme" to the first theme you want to load when launching Storybook
    theme: 'themeone',
  },

  decorators: [
    // Add a decorator function, with Story and context as your arguments
    (Story, context) => {
      // Using string interpolation, pull in the stylesheets based on
      // context.globals.theme
      // Ensure that the generated strings match existing stylesheets
      // in public/styles/themes
         const brandStylesheets = {
          typography: `../public/styles/typography/_${context.globals.brand}-typography.css`,
          theme: `../public/styles/themes/_${context.globals.brand}-theme.css`,
        };

      // Return a fragment wrapping the stylesheets and the story
      return (
        <>
          <link rel="stylesheet" href={brandStylesheets.typography} />
          <link rel="stylesheet" href={brandStylesheets.theme} />
          <Story />
        </>
      );
    },
  ],

};
```

## Further reading

- [Medium: Switching themes by stylesheet in Storybook](https://medium.com/@jo.imlay/switching-themes-by-stylesheet-in-storybook-eb8cae4cabd5)
