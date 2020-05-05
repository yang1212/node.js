import Express from 'express'
const router = Express.Router();

router.use('/calculate', require('./article'))

module.exports = router;