import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

import {getRoute} from './Routes';
import {withUser} from './user/withUser';
import {Nav} from './shared/Nav/Nav';
import {Icon} from './shared/Icon/Icon';
import {getPathWithoutParams} from './core/history';

interface NavigationProps extends RouteComponentProps {
    user?: any;
    isMenuOpen: boolean;
    onMenuChange(isOpen: boolean);
}

export const Navigation = withUser(
    withRouter((
        {user, location, history, ...props}: NavigationProps) => {
            const route = getRoute(getPathWithoutParams(location)) || {data: {title: ''}};
            return (
                <Nav
                    title={route.data ? route.data.title : ''}
                    subTitle={user && user.name}
                    leftItem={(<PrevItem onPrev={() => history.goBack()}/>)}
                    rightItem={<MenuItem {...props} />}
                />
            );
        }
    )
);

const PrevItem = ({onPrev}) => (
    <IconButton aria-label="Previous" onClick={onPrev}>
        <Icon>{'arrow_back'}</Icon>
    </IconButton>
);

const MenuItem = ({isMenuOpen, onMenuChange}) => (
    <IconButton aria-label="Menu"
                onClick={() => onMenuChange(!isMenuOpen)}>
        <Icon>{isMenuOpen ? 'close' : 'menu'}</Icon>
    </IconButton>
);
