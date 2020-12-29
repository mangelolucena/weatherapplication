import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from '@redux-saga/core';
import combineReducer from '../redux/reducers/index';
import { watcherSaga } from './sagas/weatherSaga';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  combineReducer,
  compose(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watcherSaga);


export default store;
