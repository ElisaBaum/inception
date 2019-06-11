import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {UserState} from './userReducer';

import {signIn, signOut, signUp} from './userActionCreators';
import {getUserState} from './userSelectors';

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Subtract<T, K> = Omit<T, keyof K>;

export interface WithUserProps extends UserState {
    signIn: typeof signIn;
    signOut: typeof signOut;
    signUp: typeof signUp;
}

export const withUser = <P extends Partial<WithUserProps>>(WrappedComponent: ComponentType<P>) =>
    connect(
        state => ({
            ...getUserState(state),
        }),
        {
            signIn,
            signOut,
            signUp,
        }
    )(WrappedComponent as any) as any as ComponentType<Subtract<P, WithUserProps>>;

