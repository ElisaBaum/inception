import {parse} from 'query-string';

import * as auth from './auth/authService';
import {connectMe, createUserByFriendInvite, me} from './userAgent';
import {history} from '../history';
import {SET_TOKEN_ID, SET_UNAUTHENTICATED, SET_USER, SIGN_OUT} from './userActions';

export const setUnAuthenticated = (payload?) => ({type: SET_UNAUTHENTICATED, payload});
export const setUser = (payload: any) => ({type: SET_USER, payload});
export const setTokenId = (payload: string) => ({type: SET_TOKEN_ID, payload});
export const signIn = (provider: auth.Provider) => async (dispatch) => {
    try {
        await auth.signInWithProvider(provider);
    } catch (e) {
        dispatch(setUnAuthenticated(e));
    }
};
export const signOut = () => dispatch => {
    dispatch({type: SIGN_OUT});
    auth.signOut();
};
export const signUp = (name: string) => async dispatch => {
    const {inviteToken} = parse(history.location.search);
    try {
        const {data, errors} = await createUserByFriendInvite({name, inviteToken});
        if (!errors) {
            dispatch(setUser(data.createUserByFriendInvite));
        } else {
            dispatch(setUnAuthenticated(errors));
        }
    } catch (e) {
        dispatch(setUnAuthenticated(e));
    }
};
export const loadUser = () => async (dispatch) => {
    try {
        const {data, errors} = await me();
        if (!errors) {
            dispatch(setUser(data.me));
        } else {
            dispatch(setUnAuthenticated(errors));
        }
    } catch (e) {
        dispatch(setUnAuthenticated(e));
    }
};
export const postAuthenticate = () => async dispatch => {
    const {inviteToken} = parse(history.location.search);
    if (inviteToken) {
        const {errors} = await connectMe({inviteToken});
        if (errors) {
            dispatch(setUnAuthenticated(errors));
        }
    }
};
export const init = () => dispatch => {
    auth.onAuthStateChanged(async user => {
        if (user) {
            const tokenId = await user.getIdToken();
            dispatch(setTokenId(tokenId));
            dispatch(loadUser());
        } else {
            dispatch(setUnAuthenticated());
        }
    });
};
