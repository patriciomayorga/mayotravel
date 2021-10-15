module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:react/recommended', 'prettier', 'plugin:react-hooks/recommended'],
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
  },
};
