const { strictEslint } = require('@umijs/fabric');

module.exports = {
  ...strictEslint,
  rules: {
    '@typescript-eslint/prefer-namespace-keyword': [0],
    '@typescript-eslint/explicit-function-return-type': [0],
    '@typescript-eslint/no-explicit-any': [0],
    'no-restricted-globals': [0],
    '@typescript-eslint/interface-name-prefix': [0],
    '@typescript-eslint/no-object-literal-type-assertion': [0],
    '@typescript-eslint/no-var-requires': [0]
  },
  globals: {
    USER_DEFINED: true,
    window: true
  }
};
