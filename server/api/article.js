import Express from 'express'

const router = Express.Router();
import List from '../../models/list'
import SortEnumType from '../../models/enumType'
import {responseClient} from '../util'

router.post('/addLifeData', function (req, res) {
    const {
        name,
        price,
        date,
        tag,
    } = req.body;
    let tempData = new List({
       name,
       price,
       date,
       tag,
    });
    tempData.save().then(data => {
        responseClient(res,200,200,'保存成功',data)
    }).cancel(err=>{
        responseClient(res);
    });
})

router.post('/delLifeData', (req, res) => {
    const { id } = req.body;
    List.remove({_id: id})
      .then(result => {
          if (result.result.n === 1) {
              responseClient(res, 200, 0, '删除成功', result)
          } else {
              responseClient(res, 200, 1, '不存在', result)
          }
      }).cancel(err => {
          responseClient(res);
      })
});

router.get('/getLifeData', function (req, res) {
    List.find().then(data => {
        responseClient(res, 200, 0, '请求成功', data);
    }).catch(err => {
        responseClient(res)
    })
})

router.post('/getTimeDataList', function(req, res) {
    List.find().then(data => {
        console.log(3)
        console.log(data) // 时间参数， res方法过滤返回
        responseClient(res, 200, 0, '请求成功', data);
    }).catch(err => {
        responseClient(res)
    }) 
})

router.get('/getEnumType', function(req, res) {
    SortEnumType.find().then(data => {
        responseClient(res, 200, 200, '请求成功', data);
    }).catch(err => {
        responseClient(res)
    })
})

module.exports = router;