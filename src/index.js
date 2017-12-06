import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Model from './model.js';

const model = new Model();
const render = () => {
	ReactDOM.render(<App model = {model}/>, document.getElementById('root'));
}
model.subscribe(render);
render();
registerServiceWorker();
