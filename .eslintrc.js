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
      files: ['src/**/*'],
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
