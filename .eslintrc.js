module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: ['standard-with-typescript'],
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'max-len': ["error", { "code": 120 }],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true
          }
        ]
      }
    }
  ]
}
