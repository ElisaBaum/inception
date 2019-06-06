import {Redirect, Route, RouteProps} from 'react-router';
import {AuthStatus} from '../../user/userReducer';
import React, {ComponentType} from 'react';
import {withUser} from '../../user/withUser';

interface PrivateRouteProps extends RouteProps {
    user: any;
    tokenId?: string;
    authStatus: AuthStatus;
    component: ComponentType<any>;
}

export const PrivateRoute = withUser(({user, tokenId, authStatus, component: Component, ...rest}: PrivateRouteProps) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (authStatus === 'authenticated') {
                    return (<Component {...props} />);
                }
                if (authStatus === 'unauthenticated') {
                    if (tokenId) {
                        return <Redirect to={{pathname: '/no-invite'}}/>;
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
