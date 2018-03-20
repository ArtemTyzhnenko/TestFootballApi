import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import combineStores from './sagas/combineStores';
import root from './sagas/sagas'


export const sagaMiddleware = createSagaMiddleware();

export default createStore(combineStores, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(root);

