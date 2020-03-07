const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack')
const config = require('../config/config');

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?path=http://${config.host}:${config.port}/__webpack_hmr`,
    'babel-polyfill',
     "./app/index.js"
  ],
  output: {
    path: path.resolve(__dirname, '../dist'), 
    publicPath: '/',  // 设置后解决了刷新路由出现空白的情况    
    chunkFilename: '[name]-[chunkhash:8].js', // 用意
    filename: '[name]-[hash:8].js'
  },
  devtool: 'inline-source-map', // 此处用意挖掘不深
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/, 
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader',
          {
            loader: 'css-loader'
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }), // 配置此插件将拥有一个默认模板
    new ProgressBarPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
