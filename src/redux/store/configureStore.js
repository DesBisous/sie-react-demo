import {applyMiddleware, compose, createStore} from "redux"
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/grid'

const logger = createLogger({
    // ...options
});

// 创建 redux-saga
const saga = createSagaMiddleware();


// middleware
const middleware = [ thunk, saga ];
const dev = process.env.NODE_ENV === 'development' ? true : false;

let _applyMiddleware = applyMiddleware( ...middleware );
if ( dev ) {
    middleware.push( logger );
    _applyMiddleware = compose( applyMiddleware( ...middleware ), window.devToolsExtension ? window.devToolsExtension() : undefined );
}

export default function configureStore(initialState) {
    const store = createStore( rootReducer, initialState,
        // middleware and redux-devtools
        _applyMiddleware
    );
    // 运行saga
    saga.run(rootSaga);
    return store
}