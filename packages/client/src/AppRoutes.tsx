import React from 'react';
import {BrowserRouter as Router, Route as PublicRoute, RouteProps, Switch, withRouter} from 'react-router-dom';

import {SignIn} from './user/signin/SignIn';
import {Stream} from './user/stream/Stream';
import {PrivateRoute} from './core/PrivateRoute/PrivateRoutes';
import {withUser} from './user/withUser';
import {Nav} from './shared/Nav/Nav';
import {SignUp} from './user/signup/SignUp';

interface NavigationProps extends RouteProps {
    user?: any;
}

export const Navigation = withUser(withRouter(({user, location}: NavigationProps) => {
    return (
        <Nav title={getRoute(location && location.pathname).data.title}
             subTitle={user && user.name}/>
    );
}));

export const appRoutes: any[] = [
    {route: PublicRoute, path: '/signin', component: SignIn, data: {title: 'Sign In'}},
    {route: PublicRoute, path: '/signup', component: SignUp, data: {title: 'Sign Up'}},
    {route: PublicRoute, path: '/no-invite', render: () => (<div>No invite</div>), data: {title: 'No Invite'}},
    {route: PrivateRoute, path: '/', exact: true, component: Stream, data: {title: 'Welcome'}},
];

export const getRoute = path => appRoutes.find(route => route.path === path);

export const AppRoutes = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                {
                    appRoutes.map(({route: Route, data, ...props}, index) => (
                        <Route key={index} {...props} />
                    ))
                }
            </Switch>
        </Router>
    );
};
