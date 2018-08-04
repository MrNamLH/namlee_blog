import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

const logger = createLogger({
	duration: true,
	diff: true,

	// Log everything actions with certain type
	// predicate: (getState, action) => action.type === 'SET_TECHNOLOGY',

	// Collapse actions that don't have errors
	// collapsed: (getState, action, logEntry) => !logEntry.error,
	collapsed: (getState, action) => action.type !== 'GET_POSTS',
});

export default function initializeStore(initialState) {
	return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)));
}
