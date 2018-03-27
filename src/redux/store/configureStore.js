import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

const logger = createLogger({
    // ...options
});

// middleware
const middleware = [ thunk ];

let dev = process.env.NODE_ENV === 'development' ? true : false;
if ( dev ) {
    middleware.push( logger );
}

export default function configureStore(initialState) {
    const store = createStore( rootReducer, initialState,
        // middleware and redux-devtools
        compose( applyMiddleware( ...middleware ), window.devToolsExtension ? window.devToolsExtension() : undefined )
    );
    return store
}