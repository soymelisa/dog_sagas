import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMIddleware from 'redux-saga';

import reducer from './redux';
import { watcherSaga } from "./sagas";


const SagaMIddleware = createSagaMIddleware();
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, 
    compose(applyMiddleware(SagaMIddleware), reduxDevTools))
// el compose es
// como segundo parámtero podemos pasar actions o hasta un arreglo vacío para tomar algo
// el segundo argumento y +middlewares

SagaMIddleware.run(watcherSaga);



ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root'));