module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'react-app',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': ['off'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        filter: {
          regex: '(__typename)',
          match: false,
        },
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        filter: {
          regex:
            '(__dirty|__html|__typename|__schema|push_notification_token|device_id|client_id|client_secret|grant_type|token_type|refresh_token|/[a-zA-Z]*|user.[a-zA-Z]+)',
          match: false,
        },
        leadingUnderscore: 'allow',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-anonymous-default-export': 'off',
    'jsx-a11y': 'off',
    'jsx-a11y/alt-text': 'off',
    'prettier/prettier': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-duplicate-imports': 'error',
    'no-shadow': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
