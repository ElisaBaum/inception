import React, {ComponentType, ReactNode} from 'react';
import {Route as PublicRoute, RouteProps, Switch} from 'react-router-dom';

import {SignIn} from './user/signin/SignIn';
import {Stream} from './user/stream/Stream';
import {PrivateRoute} from './core/PrivateRoute/PrivateRoutes';
import {SignUp} from './user/signup/SignUp';
import {Icon} from './shared/Icon/Icon';

type Routes = Array<{
    path: string;
    exact?: boolean;
    component?: ComponentType;
    render?: () => ReactNode;
    route: ComponentType;
    data: {
        title: string;
        icon?: ReactNode;
        navTitle?: string;
    };
}>;

export const routes: Routes = [
    {
        path: '/',
        component: Stream,
        exact: true,
        route: PrivateRoute,
        data: {
            title: 'Welcome',
            icon: (<Icon>{'view_list'}</Icon>),
            navTitle: 'Stream',
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
            title: 'No Invite',
        }
    },
    {
        path: '/settings',
        render: () => (<div>Settings</div>),
        route: PrivateRoute,
        data: {
            title: 'Settings',
            icon: (<Icon>{'settings'}</Icon>),
            navTitle: 'Settings',
        }
    },
    {
        path: '/friends',
        render: () => (<div>Friends</div>),
        route: PrivateRoute,
        data: {
            title: 'Friends',
            icon: (<Icon>{'supervised_user_circle'}</Icon>),
            navTitle: 'Friends',
        }
    },
    {
        path: '/sign-out',
        render: () => (<div>Sign out</div>),
        route: PrivateRoute,
        data: {
            title: 'Sign out',
            icon: (<Icon>{'power_settings_new'}</Icon>),
            navTitle: 'Sign out',
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
