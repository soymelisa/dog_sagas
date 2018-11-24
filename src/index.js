import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './redux';
import { watcherSaga } from "./sagas";


const SagaMiddleware = createSagaMiddleware();
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, 
    compose(applyMiddleware(SagaMiddleware), reduxDevTools));
// el compose es
// como segundo parámtero podemos pasar actions o hasta un arreglo vacío para tomar algo
// el segundo argumento y +middlewares

SagaMiddleware.run(watcherSaga);



ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root'));