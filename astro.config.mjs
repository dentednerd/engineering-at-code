// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Engineering at Code',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dentednerd/engineering-at-code' }],
			sidebar: [
				{
					label: 'Welcome!',
					items: [
						'overview',
						'contribution-guide',
						'to-do'
					]
				},
				{
					label: 'Guides',
					items: [
						{
							label: 'Tokens Studio in Figma',
							items: [{ autogenerate: { directory: 'guides/tokens-studio-for-figma' } }],
						},
						{
							label: 'Storybook',
							items: [{ autogenerate: { directory: 'guides/storybook' } }],
						},
						{
							label: 'Design tokens workflow',
							items: [{ autogenerate: { directory: 'guides/design-tokens-workflow' } }],
						},
					],
				},
				{
					label: 'Reference',
					items: [{
						label: 'Third party services',
						items: [{
							autogenerate: { directory: 'reference/third-party-services' }
						}]
					}],
				},
			],
		}),
	],
});
