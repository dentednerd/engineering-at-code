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
					label: 'Getting started',
					items: [
						'overview',
						'contribution-guide',
						'to-do'
					]
				},
				// {
				// 	label: 'Guides',
				// 	items: [{ autogenerate: { directory: 'guides' } }],
				// },
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
