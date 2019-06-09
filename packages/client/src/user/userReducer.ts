import {
    SET_FRIEND_FROM_CURRENT_INVITE,
    SET_TOKEN_ID,
    SET_UNAUTHENTICATED,
    SET_USER,
    SIGN_OUT,
    START_SIGN_IN,
    START_SIGN_UP
} from './userActions';

export type AuthStatus = 'authenticated' | 'pending' | 'loading' | 'unauthenticated';

export interface UserState {
    user?: any;
    friendFromCurrentInvite?: any;
    tokenId?: string;
    errors?: any;
    authStatus: AuthStatus;
}

const initialState: UserState = {authStatus: 'pending'};

export default function(state = initialState, action): UserState {
    switch (action.type) {
        case START_SIGN_IN:
        case START_SIGN_UP:
            return {
                ...state,
                authStatus: 'loading',
            };
        case SET_UNAUTHENTICATED:
            return {
                ...state,
                errors: action.payload,
                authStatus: 'unauthenticated',
            };
        case SET_FRIEND_FROM_CURRENT_INVITE:
            return {
                ...state,
                friendFromCurrentInvite: action.payload,
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
