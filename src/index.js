import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reducer } from './Reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

//created the store
const store = createStore(reducer);

//wrapped App in the Provider
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
