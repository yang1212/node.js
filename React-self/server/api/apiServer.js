import Express from 'express'
import config from '../../config/config'
// 非常常用的express中间件,作用是对post请求的请求体进行解析
import bodyParser from 'body-parser'
// express的中间件，用来实现cookie的解析
import cookieParser from 'cookie-parser'
// 身份认证
import session from 'express-session'
import mongoose from 'mongoose'

const port = config.apiPort;

const app = new Express();
app.use(bodyParser.urlencoded({extended: false}));
// cookieParser初始化时，传入express_react_cookie作为签名的秘钥
app.use(cookieParser('express_react_cookie'));
app.use(session({
    secret:'express_react_cookie',
    resave: true,
    saveUninitialized:true,
    cookie: {maxAge: 60 * 1000 * 30} //过期时间
}));


//管理页面路由
app.use('/admin', require('./admin'));

mongoose.Promise = require('bluebird');
mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/blog`, function (err, db) {
    if (err) {
        console.log(err, "数据库连接失败");
        return;
    }
    console.log('数据库连接成功');

    app.listen(port, function (err) { 
        if (err) {
            console.error('err:', err);
        } else {
            console.info(`===> api server is running at ${config.apiHost}:${config.apiPort}`)
        }
    });
});
