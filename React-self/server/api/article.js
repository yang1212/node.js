import Express from 'express'

const router = Express.Router();
import Article from '../../models/article'
import List from '../../models/list'
import {responseClient} from '../util'

router.post('/addArticle', function (req, res) {
    const {
        title,
        content,
        time,
        tags,
        isPublish
    } = req.body;
    const author = req.session.userInfo.username;
    const coverImg =  `/${Math.round(Math.random() * 9 + 1)}.jpg`;
    const viewCount = 0;
    const commentCount = 0;
    let tempArticle = new Article({
        title,
        content,
        isPublish,
        viewCount,
        commentCount,
        time,
        author,
        coverImg,
        tags:tags.split(',')
    });
    tempArticle.save().then(data=>{
        responseClient(res,200,0,'保存成功',data)
    }).cancel(err=>{
        console.log(err);
        responseClient(res);
    });
});

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
        responseClient(res,200,0,'保存成功',data)
    }).cancel(err=>{
        responseClient(res);
    });
})

router.post('/updateArticle',(req,res)=>{
    const {
        title,
        content,
        time,
        tags,
        isPublish,
        id
    } = req.body;
    Article.update({_id:id},{title,content,time,tags:tags.split(','),isPublish})
        .then(result=>{
            responseClient(res,200,0,'更新成功',result)
        }).cancel(err=>{
        responseClient(res);
    });
});

router.get('/delArticle',(req,res)=>{
    let id = req.query.id;
    Article.remove({_id:id})
        .then(result=>{
            if(result.result.n === 1){
                responseClient(res,200,0,'删除成功!')
            }else{
                responseClient(res,200,1,'文章不存在');
            }
        }).cancel(err=>{
            responseClient(res);
    })
});

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
module.exports = router;