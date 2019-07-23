const path = require('path');

module.exports = {
  entry: {
    layout: './src/layout-imports.js',
    myComponent: './src/my-component.js'
  },
  output: {
    filename: './dist/[name].bundle.js',
    path: path.resolve('./') //path.resolve(__dirname, '/public/dist')
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all'
    }
  }
};