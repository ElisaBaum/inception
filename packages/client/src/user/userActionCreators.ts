import {parse} from 'query-string';

import {history} from '../core/history';
import * as auth from './auth/authService';
import {connectMe, createUserByFriendInvite, me} from './userAgent';
import {
    SET_FRIEND_FROM_CURRENT_INVITE,
    SET_TOKEN_ID,
    SET_UNAUTHENTICATED,
    SET_USER,
    SIGN_OUT,
    START_SIGN_IN,
    START_SIGN_UP
} from './userActions';
import {openModal} from '../core/modals/modalsActionCreators';

export const setUnAuthenticated = (payload?) => ({type: SET_UNAUTHENTICATED, payload});
export const setUser = (payload: any) => ({type: SET_USER, payload});
export const setFriendFromCurrentInvite = (payload: any) => ({type: SET_FRIEND_FROM_CURRENT_INVITE, payload});
export const setTokenId = (payload: string) => ({type: SET_TOKEN_ID, payload});
export const signIn = (provider: auth.Provider) => async (dispatch) => {
    try {
        dispatch({type: START_SIGN_IN});
        await auth.signInWithProvider(provider);
    } catch (e) {
        dispatch(setUnAuthenticated(e));
    }
};
export const signOut = () => async dispatch => {
    dispatch({type: SIGN_OUT});
    await auth.signOut();
};
// TODO Simplify code: Combine signUp and loadUser code some how
export const signUp = (name: string) => async dispatch => {
    const {inviteToken} = parse(history.location.search);
    try {
        dispatch({type: START_SIGN_UP});
        const {data, errors} = await createUserByFriendInvite({name, inviteToken});
        if (!errors) {
            dispatch(connectUser());
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
            dispatch(connectUser());
            dispatch(setUser(data.me));

            dispatch(setFriendFromCurrentInvite(data.me));
            dispatch(openModal({modalKey: 'friendConnect'}));
        } else {
            dispatch(setUnAuthenticated(errors));
        }
    } catch (e) {
        dispatch(setUnAuthenticated(e));
    }
};
export const connectUser = () => async dispatch => {
    const {inviteToken, ...params} = parse(history.location.search);
    if (inviteToken) {
        const {data, errors} = await connectMe({inviteToken});
        if (!errors) {
            dispatch(setFriendFromCurrentInvite(data.connectMe));
            dispatch(openModal({modalKey: 'friendConnect'}));
            // TODO Remove query param from url
            // TODO Set and handle errors
        }
    }
};
export const initUser = () => dispatch => {
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
