/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              color: "var(--tw-prose-body)",
              fontWeight: 'normal',
              fontStyle: 'normal',
            },
            p: {
              wordBreak: 'break-word',
            },
            pre: null,
            'pre code': null,
            'pre code::before': null,
            'pre code::after': null,
            code: null,
            'code::before': null,
            'code::after': null,
          },
        },
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
  },
  safelist: ['dark:border-b'],
  plugins: [ require('@tailwindcss/typography'), require('daisyui'), require('tailwindcss-animate')],
  darkMode: ['selector'],
  daisyui: {
   themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
    darkTheme: 'dim',
  },
}
