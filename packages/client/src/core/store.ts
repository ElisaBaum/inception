import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import user from '../user/userReducer';
import modals from '../core/modals/modalsReducer';

const composeEnhancers: typeof compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type State = ReturnType<(typeof store)['getState']>;

export const store = createStore(
    combineReducers({
        user,
        modals,
    }),
    composeEnhancers(
        applyMiddleware(thunk as ThunkMiddleware<any, any>),
    ),
);






