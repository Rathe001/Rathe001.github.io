module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: { jest: true },
      files: ['__test__', '*.spec.jsx', '*.spec.js', 'cypress/**/*', 'cypress.config.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/prop-types': 'off',
      },
    },
    {
      files: ['.storybook/**', 'stories/**'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      env: { jest: true },
      files: ['*.spec.js?(x)', '**/__test__/**', '*.spec.ts?(x)'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
      },
    },
    {
      files: ['.storybook/**', '**/stories/**'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
      },
    },
    {
      files: ['.moduleBuilder'],
      rules: {
        camelcase: 'off',
        'import/no-unresolved': 'off',
        'import/no-webpack-loader-syntax': 'off',
        'react/jsx-filename-extension': 'off',
      },
    },
    {
      extends: ['plugin:@typescript-eslint/recommended'],
      files: ['**/*.ts?(x)', '**/*.d.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            format: ['PascalCase'],
            prefix: ['T'],
            selector: 'typeAlias',
          },
          {
            format: ['PascalCase'],
            prefix: ['I'],
            selector: 'interface',
          },
        ],
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-use-before-define': ['error'],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            '.d.ts': 'never',
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],

        'no-shadow': 'off',
        // per https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/require-default-props': 'off',
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  plugins: ['react-hooks', 'sort-destructure-keys', 'sort-keys-fix'],
  rules: {
    'func-names': ['warn', 'as-needed'],
    'func-style': 'off',
    'import/extensions': 'off',
    'jsx-a11y/label-has-for': 'off',
    'no-nested-ternary': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
      },
    ],
    'quote-props': ['error', 'as-needed'],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-fragments': 0,
    'react/jsx-sort-props': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', './'],
      },
    },
    react: {
      version: 'latest',
    },
  },
};
