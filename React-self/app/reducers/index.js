import {combineReducers} from 'redux'
import {shopData} from './adminCalclulate'

const admin = combineReducers({ // 通过combineReducers方法将子 Reducer 合并成一个大的函数
    shopData
});

export default admin

