import mongoose from 'mongoose'

// Schema, 一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力
module.exports = new mongoose.Schema({
    type:String,
    value:String
});