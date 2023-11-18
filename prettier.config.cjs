/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  quoteProps: 'consistent',
  bracketSameLine: true,
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
}
