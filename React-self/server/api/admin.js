import Express from 'express'
const router = Express.Router();
import {responseClient} from '../util'

//admin请求后台验证

// TO DO: 暂时屏蔽
// router.use( (req,res,next) =>{
//     if(req.session.userInfo){
//         next()
//     }else{
//         res.send(responseClient(res,200,1,'身份信息已过期，请重新登录'));
//     }
// });

router.use('/calculate', require('./article'))

module.exports = router;