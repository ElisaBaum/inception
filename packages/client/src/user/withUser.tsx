import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {AuthStatus} from './userReducer';
import {signIn, signOut} from './userActionsCreators';
import {getAuthStatus, getTokenId, getUser} from './userSelectors';

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Subtract<T, K> = Omit<T, keyof K>;

export interface WithUserProps {
    user: any;
    authStatus: AuthStatus;
    tokenId: string;
    signIn: typeof signIn;
    signOut: typeof signOut;
}

export const withUser = <P extends Partial<WithUserProps>>(WrappedComponent: ComponentType<P>) =>
    connect(
        state => ({
            user: getUser(state),
            authStatus: getAuthStatus(state),
            tokenId: getTokenId(state),
        }),
        {
            signIn,
            signOut,
        }
    )(WrappedComponent as any) as any as ComponentType<Subtract<P, WithUserProps>>;

