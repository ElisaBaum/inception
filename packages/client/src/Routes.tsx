import React from 'react';
import {Route as PublicRoute, Switch} from 'react-router-dom';

import {SignIn} from './user/signin/SignIn';
import {Stream} from './user/stream/Stream';
import {PrivateRoute} from './core/PrivateRoute/PrivateRoutes';
import {SignUp} from './user/signup/SignUp';

export const routes: any[] = [
    {
        path: '/',
        component: Stream,
        exact: true,
        route: PrivateRoute,
        data: {
            title: 'Welcome',
        }
    },
    {
        path: '/signin',
        component: SignIn,
        route: PublicRoute,
        data: {
            title: 'Sign In',
        }
    },
    {
        path: '/signup',
        component: SignUp,
        route: PublicRoute,
        data: {
            title: 'Sign Up'
        }
    },
    {
        path: '/no-invite',
        render: () => (<div>No invite</div>),
        route: PublicRoute,
        data: {
            title: 'No Invite'
        }
    },
];

export const getRoute = path => routes.find(route => route.path === path);

export const Routes = () => {
    return (
        <Switch>
            {
                routes.map(({route: Route, data, ...props}, index) => (
                    <Route key={index} {...props} />
                ))
            }
        </Switch>
    );
};
