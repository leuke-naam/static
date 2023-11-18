import { defineConfig } from 'astro/config'

// Import Astro integrations
import compress from 'astro-compress'
import critters from 'astro-critters'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  // The production site will be hosted here
  site: 'https://stichtingsticky.nl/',
  integrations: [
    sitemap(),
    tailwind(),

    // Apply the `critters` integration after TailwindCSS
    critters(),

    // Apply the `compress` integration last for best optimizations
    compress(),
  ],
})
