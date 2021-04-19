import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';

import { ICartState } from './modules/cart/types';

export interface IState {
	cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
