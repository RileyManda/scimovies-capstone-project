const webpackTestConfig = require('./webpack.test.config.js');

module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  webpack: webpackTestConfig,
};
