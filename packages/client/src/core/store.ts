import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import user from '../user/userReducer';
import search from '../search/searchReducer';
import media from '../media/mediaReducer';
import modals from '../core/modals/modalsReducer';

const composeEnhancers: typeof compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type State = ReturnType<(typeof store)['getState']>;

export const store = createStore(
    combineReducers({
        user,
        modals,
        media,
        search,
    }),
    composeEnhancers(
        applyMiddleware(thunk as ThunkMiddleware<any, any>),
    ),
);






