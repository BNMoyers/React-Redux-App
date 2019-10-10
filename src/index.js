/*dependencies*/
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

/*components*/
import './index.css';
import App from './App';
import { reducer } from './reducers';

/*store*/
const store = createStore(reducer);


ReactDOM.render(<App store={store}/>, document.getElementById('root'));

