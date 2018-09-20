module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  env: {
    'shared-node-browser': true,
    es6: true
  }
};
