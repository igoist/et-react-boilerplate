const path = require('path');
const webpack = require('webpack');

const srcPath = './src/';

module.exports = {
  entry: {
    index: srcPath + 'index.js'
  },

  output: {
    filename: '[name].bundle.min.js',
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
        include: path.join(__dirname, srcPath)
      },
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    })
  ]
};