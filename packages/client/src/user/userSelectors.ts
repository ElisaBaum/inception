import {createSelector} from 'reselect';
import {UserState} from './userReducer';

export const getUserState = (state): UserState => state.user;
export const getAuthStatus = createSelector(getUserState, state => state.authStatus);
export const getUser = createSelector(getUserState, state => state.user);
export const getTokenId = createSelector(getUserState, state => state.tokenId);
