import React from 'react';
import {Redirect as ReactRouterRedirect, RedirectProps} from 'react-router';

import {history} from '../history';

export const Redirect = ({to, ...props}: RedirectProps) => {
    const toProps = typeof to === 'string' ? {pathname: to} : to;

    return (
        <ReactRouterRedirect
            to={{
                ...history.location,
                ...toProps,
            }}
            {...props} />
    );
};
