import React from 'react';
import ReactDOM from 'react-dom';
import initReactFastclick from 'react-fastclick';
import './index.css';
import App from './router';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store/configureStore'
import { Provider } from "react-redux";

initReactFastclick();

// 创建 Redux 的 store 对象
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
