const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src/layout-imports.js', './src/my-component.js'],
  },
  output: {
    filename: './dist/index_bundle.js',
    path: path.resolve('./') //path.resolve(__dirname, '/public/dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index-template.html',
        })
    ]
};
