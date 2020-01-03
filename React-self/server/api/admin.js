import Express from 'express'
const router = Express.Router();
import {responseClient} from '../util'

router.use('/calculate', require('./article'))

module.exports = router;