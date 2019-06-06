import * as auth from './authService';
import {queryMe} from './userAgent';
import {SET_TOKEN_ID, SET_UNAUTHENTICATED, SET_USER, SIGN_OUT, START_SIGN_IN} from './userActions';

export const startSignIn = () => ({type: START_SIGN_IN});
export const setUnAuthenticated = (payload?) => ({type: SET_UNAUTHENTICATED, payload});
export const setUser = (payload: any) => ({type: SET_USER, payload});
export const setTokenId = (payload: string) => ({type: SET_TOKEN_ID, payload});
export const signIn = (provider: auth.Provider) => async (dispatch) => {
    dispatch(startSignIn());
    try {
        const userCredential = await auth.signInWithProvider(provider);
        if (userCredential.user) {
            const tokenId = await userCredential.user.getIdToken();
            dispatch(setTokenId(tokenId));
            dispatch(authenticate());
        }
    } catch (e) {
        dispatch(setUnAuthenticated(e));
    }
};
export const signOut = () => dispatch => {
    console.log('signout');
    dispatch({type: SIGN_OUT});
    auth.signOut();
};
export const authenticate = () => async (dispatch) => {
    const {data, errors} = await queryMe();
    if (!errors) {
        dispatch(setUser(data.me));
    } else {
        dispatch(setUnAuthenticated(errors));
    }
};
