module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    'import/resolver': {
      alias: [
        ['screens', './screens'],
        ['store', './store'],
        ['utils', './utils'],
      ],
    },
  },
};
