import {take, call, put,select} from 'redux-saga/effects'
import {get, post} from '../fetch/fetch'
import {actionsTypes as IndexActionTypes} from '../reducers'
import {actionTypes as NewArticleActionTypes} from '../reducers/adminManagerNewArticle'

export function* saveLifeData(data) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        let id = yield select(state=>state.admin.newArticle.id);
        if(id){
            data.id = id;
            return yield call(post, '/admin/article/updateArticle', data);
        }else{
            return yield call(post, '/admin/article/addArticle', data);
        }

    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
    } 
}