import { combineReducers, compose, createStore, Store } from 'redux';

import { IAction } from '../interfaces';

export interface IAppState {
	[key: string]: any;
}

let store: Store;

const commonReducer = (state: IAppState = {}) => {
	return state;
};

const reducerManger: any = {};

let currentReducer: any = combineReducers({
	common: commonReducer,
});

let validKeys = ['common'];

export const replacePageReducer = (key: string, reducer: any, initialAction: IAction) => {
	currentReducer = combineReducers({
		common: commonReducer,
		[key]: reducer,
	});

	validKeys = ['common', key];

	store.dispatch(initialAction);

	store.dispatch({ type: 'replaced' });
};

reducerManger.reducer = (state: any, action: any) => {
	const currentState = { ...state };

	Object.keys(currentState).forEach(key => {
		if (!validKeys.includes(key)) {
			delete currentState[key];
		}
	});

	return currentReducer(currentState, action);
};

export const configureStore = (initialState: any) => {
	store = createStore(
		reducerManger.reducer,
		initialState,
		compose(
			typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
				? window.__REDUX_DEVTOOLS_EXTENSION__()
				: (f: any) => f,
		),
	);

	return store;
};

export type AppState = ReturnType<typeof store.getState>;
