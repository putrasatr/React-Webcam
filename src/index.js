import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import rootReducer from './Component/Reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Component/Saga';

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
