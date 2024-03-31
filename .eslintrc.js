module.exports = {
  extends: 'airbnb-base',
  rules: {
    indent: ['error', 2, { MemberExpression: 0 }],
    'no-trailing-spaces': 'error',
    'arrow-parens': 'off',
    'no-confusing-arrow': 'off',
    'class-methods-use-this': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
  },
  env: {
    browser: true,
    'jest/globals': true,
  },
  plugins: [
    'jest',
  ],
};
