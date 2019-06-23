import React, {ComponentType, ReactNode} from 'react';
import {Link, Route as PublicRoute, Switch} from 'react-router-dom';
import posed, {PoseGroup} from 'react-pose';

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
        render: () => (
            <div>
                <Link to={'/'}>{'stream'}</Link>
                <Link to={'/friends'}>{'friends'}</Link>
                sdfsdfsdfsdfsdf <br/>
                sdfsdfsdfsdfsdf <br/>
                sdfsdfsdfsdfsdf <br/>
                sdfsdfsdfsdfsdf <br/>
                sdfsdfsdfsdfsdf <br/>
            </div>
        ),
        route: PrivateRoute,
        data: {
            title: 'Settings',
            icon: (<Icon>{'settings'}</Icon>),
            navTitle: 'Settings',
        }
    },
    {
        path: '/friends',
        render: () => (
            <div>
                <Link to={'/'}>{'stream'}</Link>
                <Link to={'/settings'}>{'settings'}</Link>
                dsfs jjjjjjj fdsfs jjjjjjj  <br/>
                dsfs jjjjjjj f <br/>
                dsfs jjjjjjj f <br/>
                dsfs jjjjjjj f <br/>
                dsfs jjjjjjj f <br/>
            </div>
        ),
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

export const Routes = () => (
    <PublicRoute render={({location}) => (
        <PoseGroup>
            <RouteContainer key={location.pathname}>
                <Switch location={location}>
                    {
                        routes.map(({route: CurrentRoute, data, ...props}) => (
                            <CurrentRoute key={props.path} {...props} />
                        ))
                    }
                </Switch>
            </RouteContainer>
        </PoseGroup>
    )}/>
);

const RouteContainer = posed.div({
    enter: {
        x: 0,
        opacity: 1,
        delay: 200,
        beforeChildren: true,
        transition: {x: {duration: 150}}
    },
    exit: {
        opacity: 0,
        x: -150,
        transition: {x: {duration: 150}}
    }
});
