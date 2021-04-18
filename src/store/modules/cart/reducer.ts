import { Reducer } from 'redux';
import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
	items: []
};

const cart: Reducer = (state, action) => {
	return {
		items: INITIAL_STATE
	};
};

export default cart;
