import React from 'react';
import ReactDOM from 'react-dom';
import initReactFastclick from 'react-fastclick';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

initReactFastclick();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
