const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const srcPath = './src/';

const webpackConfig = {
  entry: {
    index: [
      'react-hot-loader/patch',
      srcPath + 'index.js'
    ]
  },

  output: {
    filename: '[name].bundle.min.js',
    path: path.resolve(__dirname, 'dist/'),
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
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunks: ['index']
    }),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    })
  ],
  devServer: {
    contentBase: './dist',
    publicPath: '/',
    inline: true,
    hotOnly: true
  },
};

function getEntries(globPath) {
  var files = glob.sync(globPath),
      entries = {};
      console.log(files);

  files.forEach(function(filepath) {
    // 取倒数第二层(views 下面的文件夹)做包名
    var split = filepath.split('/');
    var name = split[split.length - 2];

    entries[name] = './' + filepath;
  });

  return entries;
}

var entries = getEntries(srcPath + 'views/**/index.js');console.log(entries);

Object.keys(entries).forEach(function(name) {
  // 每个页面生成一个 entry，如果需要 HotUpdate，在这里修改 entry
  webpackConfig.entry[name] = entries[name];

  // 每个页面生成一个 html
  var plugin = new HtmlWebpackPlugin({
    // 生成出来的 html 文件名
    filename: name + '.html',
    // 每个 html 的模版，这里多个页面使用同一个模版
    template: 'src/index.html',
    // 自动将引用插入 html
    inject: true,
    // 每个 html 引用的 js 模块，也可以在这里加上 vendor 等公用模块
    chunks: [name]
  });
  webpackConfig.plugins.push(plugin);
});

module.exports = webpackConfig;