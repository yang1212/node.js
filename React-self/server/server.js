import path from 'path'
import Express from 'express'
import httpProxy from 'http-proxy'
import compression from 'compression'
import connectHistoryApiFallback from 'connect-history-api-fallback'
import config from '../config/config'

const app = new Express();
const port = config.port;

app.use('/api',(req,res)=>{
    proxy.web(req,res,{target:targetUrl})
});

// 防止刷新浏览或者直接进入某页面出现404
app.use('/', connectHistoryApiFallback());

//创建一个代理服务,地址为本地的3030端口
const targetUrl = `http://${config.apiHost}:${config.apiPort}`;
const proxy = httpProxy.createProxyServer({
    target:targetUrl
});

// Express 4.0以上版本, 为了缩小接口与静态文件的下载体积，在服务器资源可观的情况下我们可以开启Gzip
app.use(compression());


//热更新
if(process.env.NODE_ENV!=='production'){
    const Webpack = require('webpack');
    const webpackConfig = require('../config/webpack.dev');

    const compiler = Webpack(webpackConfig);
    
    let devMiddleWare = require('webpack-dev-middleware')(compiler, {
        publicPath: webpackConfig.output.publicPath,
        quiet: true,
        stats: {
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }
      })
      
    let hotMiddleware = require('webpack-hot-middleware')(compiler, {
        log: false,
        heartbeat: 2000
    })
    app.use(devMiddleWare)
    app.use(hotMiddleware)
}

app.listen(port,(err)=>{ // 监听8082端口
    if(err){
        console.error(err)
    }else{
        console.log(`===>open http://${config.host}:${config.port} in a browser to view the app`);
    }
});