import {applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'

const win = window;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

let storeEnhancers ;
if(process.env.NODE_ENV==='production'){
    storeEnhancers = compose(
        applyMiddleware(...middlewares,sagaMiddleware)
    );
}else{
    storeEnhancers = compose(
        applyMiddleware(...middlewares,sagaMiddleware),
        (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
    );
}
