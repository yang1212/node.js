import mongoose from 'mongoose'
import enumTypeSchema from '../schemas/sortEnumType'
// model, 由Schema发布生成的模型，具有抽象属性和行为的数据库操作对
module.exports = mongoose.model('SortEnumType', enumTypeSchema);