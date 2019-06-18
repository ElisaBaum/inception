import {Route, RouteProps} from 'react-router';
import {AuthStatus} from '../../user/userReducer';
import React, {ComponentType, ReactNode} from 'react';
import {withUser} from '../../user/withUser';
import {Redirect} from '../Redirect/Redirect';

interface PrivateRouteProps extends RouteProps {
    user: any;
    tokenId?: string;
    authStatus: AuthStatus;
    component?: ComponentType<any>;
    render?: (props: any) => ReactNode;
}

export const PrivateRoute = withUser(({user, tokenId, authStatus, render, component: Component, ...rest}: PrivateRouteProps) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (authStatus === 'authenticated') {
                    if (render) {
                        return render(props);
                    }
                    if (Component) {
                        return (<Component {...props} />);
                    }
                }
                if (authStatus === 'unauthenticated') {
                    const friendInvite = true;
                    if (tokenId) {
                        if (friendInvite) {
                            return <Redirect to={{
                                pathname: '/signup',
                                state: {from: props.location}
                            }}/>;
                        } else {
                            return <Redirect to={'/noinvite'}/>;
                        }
                    }
                    return <Redirect
                        to={{
                            pathname: '/signin',
                            state: {from: props.location}
                        }}
                    />;
                }
            }}
        />
    );
});
