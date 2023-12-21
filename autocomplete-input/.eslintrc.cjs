module.exports = {
  root: true,
  env: {
    es2021: true,
    'vue/setup-compiler-macros': true,
    browser: true,
    amd: true,
    node: true,
  },
  globals: {
    logger: true,
    global: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/eslint-config-typescript',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:vitest/recommended',
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-control-regex': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    semi: ['error', 'never'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'vue/require-explicit-emits': 'off',
    'no-import-assign': 'off',
    'prettier/prettier': 'error',
    'vue/script-setup-uses-vars': 1,
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/component-name-in-template-casing': 1,
    'vue/custom-event-name-casing': 1,
    'vue/define-emits-declaration': 1,
    'vue/define-macros-order': 1,
    'vue/define-props-declaration': 1,
    'vue/html-button-has-type': 1,
    'vue/no-required-prop-with-default': 1,
    'vue/no-unused-refs': 1,
    'vue/prefer-define-options': 1,
    'vue/prefer-separate-static-class': 1,
    'vue/prefer-true-attribute-shorthand': 1,
    'vue/valid-define-options': 1,
    'vue/require-typed-ref': 1,
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/padding-line-between-blocks': ['error', 'never'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase'],
      },
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        format: null,
        modifiers: ['requiresQuotes'],
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.stories.*'],
      rules: {
        '@typescript-eslint/naming-convention': 0,
      },
    }, // override "simple-import-sort" config
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx', '*.vue'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              [
                // Vue
                '^vue',
                '^@vue',
              ],
              ['^@?\\w'],
              // Types
              ['^@/models'],
              [
                // stores
                '^@/store',
                // Other internal packages.
                '^@',
              ],
              [
                // Parent imports. Put `..` last.
                '^\\.\\.(?!/?$)',
                '^\\.\\./?$',
                // Side effect imports.
                '^\\u0000',
                // Other relative imports. Put same-folder imports and `.` last.
                '^\\./(?=.*/)(?!/?$)',
                '^\\.(?!/?$)',
                '^\\./?$',
                // Style imports.
                '^.+\\.?(css)$',
              ],
            ],
          },
        ],
      },
    },
  ],
  plugins: ['prettier', 'vitest', 'simple-import-sort'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './autocomplete-input/tsconfig.json',
  },
}
