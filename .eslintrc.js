/**
 * friend-finder.
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2018 Richard Cyrus <richard.cyrus@rcyrus.com>.
 */

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'standard',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  env: {
    node: true,
    es6: true,
  },
}
