import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

import solidJs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), solidJs()],
})
