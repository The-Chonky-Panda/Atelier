module.exports = {
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['bundle.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
