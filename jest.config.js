const webpackTestConfig = require('./webpack.test.config.js');

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  webpack: webpackTestConfig,
};
