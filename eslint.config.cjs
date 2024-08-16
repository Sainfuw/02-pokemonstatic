const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')
const eslintPluginAstro = require('eslint-plugin-astro')

module.exports = [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/.git/**'],
  },
  eslintPluginPrettierRecommended,
  ...eslintPluginAstro.configs['flat/recommended'],
]
