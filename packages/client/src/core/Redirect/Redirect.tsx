import React from 'react';
import {Redirect as ReactRouterRedirect, RedirectProps, RouteComponentProps, withRouter} from 'react-router';

export const Redirect = withRouter(
    ({to, history, ...props}: RedirectProps & RouteComponentProps) => {
        const toProps = typeof to === 'string' ? {pathname: to} : to;

        return (
            <ReactRouterRedirect
                to={{
                    ...history.location,
                    ...toProps,
                }}
                {...props} />
        );
    }
);
