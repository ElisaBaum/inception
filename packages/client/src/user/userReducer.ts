import {SET_FRIEND_INVITE_FAIL, SET_TOKEN_ID, SET_UNAUTHENTICATED, SET_USER, SIGN_OUT, START_SIGN_IN} from './userActions';

export type AuthStatus = 'authenticated' | 'pending' | 'unauthenticated';
export type AuthStatus2 = 'pending' | 'signedIn' | 'authenticated' | 'unauthenticated';

export interface UserState {
    user?: any;
    tokenId?: string;
    errors?: any;
    authStatus: AuthStatus;
}

const initialState: UserState = {authStatus: 'pending'};

export default function(state = initialState, action): UserState {
    switch (action.type) {
        case START_SIGN_IN:
            return {
                ...state,
                authStatus: 'pending',
            };
        case SET_UNAUTHENTICATED:
            return {
                ...state,
                errors: action.payload,
                authStatus: 'unauthenticated',
            };
        case SET_FRIEND_INVITE_FAIL:
            return {
                ...state,
                errors: action.payload,
                authStatus: 'unauthenticated',
            };
        case SIGN_OUT:
            return {
                ...state,
                user: undefined,
                tokenId: undefined,
                authStatus: 'unauthenticated',
            };
        case SET_TOKEN_ID:
            return {
                ...state,
                tokenId: action.payload,
            };
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                authStatus: 'authenticated',
            };
        default:
            return state;
    }
}
