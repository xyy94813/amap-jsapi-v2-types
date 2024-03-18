module.exports = {
  extends: 'standard',
  ignorePatterns: [
    'node_modules/**/*', // output dir
    'dist/**/*', // output dir
    '.yarn/**/*', // yarn dir
    '.pnp.*', // yarn pnp files
  ],
  overrides: [
    {
      files: ['types/**/*'],
      extends: 'standard-with-typescript',
      env: {
        browser: true,
        es2021: true,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        semi: 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': ['error', 'never'],
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: { delimiter: 'semi', requireLast: true },
          singleline: { delimiter: 'semi', requireLast: false },
          multilineDetection: 'brackets',
        }],
        '@typescript-eslint/consistent-type-imports': 'off', // Event/Map
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      },
    },
    {
      // config files
      files: [
        '.eslintrc.{js,cjs}',
        './commitlint.config.js',
        './jest.config.js',
      ],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      // for es-module config js
      files: ['./.lintstagedrc.mjs'],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
