const path = require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    plugins:[
      new HtmlWebpackPlugin({
        template:'./src/index.html',
        filename:'index.html',
      })
    ],
    devServer:{
      host:'localhost',    //服务器的ip地址
      port: 5000,    //端口
      open:true,    //自动打开页面
    }
  }