const js = require('@eslint/js')
const tsParser = require('@typescript-eslint/parser')
const solid = require('eslint-plugin-solid/configs/typescript')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')
const eslintPluginAstro = require('eslint-plugin-astro')

module.exports = [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/.git/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    ...solid,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  },
  eslintPluginPrettierRecommended,
  ...eslintPluginAstro.configs['flat/recommended'],
]
