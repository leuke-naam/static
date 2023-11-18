import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.astro'],
  theme: {
    colors: {
      'white': '#fff',
      'off-white': '#fffff6',
      'pink': '#e46ca7',
      'dark-grey': '#222',
      'black': '#000',
    },
    fontFamily: {
      'sans-serif': `"Lato", "Helvetica Neue", Helvetica, Arial, sans-serif`,
    },
  },
} satisfies Config
