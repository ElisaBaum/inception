import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import user from '../user/userReducer';
import modals from '../core/modals/modalsReducer';

export type State = ReturnType<(typeof store)['getState']>;

export const store = createStore(
    combineReducers({
        user,
        modals,
    }),
    compose(
        applyMiddleware(thunk as ThunkMiddleware<any, any>),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);






