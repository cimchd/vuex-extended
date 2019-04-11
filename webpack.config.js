const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'vuex-extended.js',
    path: path.resolve(__dirname, 'dist')
  }
};