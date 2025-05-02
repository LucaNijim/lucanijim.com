import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://lucanijim.com',
	integrations: [
		mdx(),
		sitemap({
			lastmod: new Date('2025-05-02')
		})
	],
});