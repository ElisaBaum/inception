import React, {createContext, useContext, useEffect, useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

import {getRoute} from './Routes';
import {withUser} from './user/withUser';
import {Nav} from './shared/Nav/Nav';
import {Icon} from './shared/Icon/Icon';
import {getPathWithoutParams} from './core/history';

export const NavigationContext = createContext<{
    title?: string;
    subtitle?: string
    setTitle(title: string);
    setSubtitle(subtitle: string);
}>({} as any);
export const NavigationProvider = ({children}) => {
    const [title, setTitle] = useState<string | undefined>(undefined);
    const [subtitle, setSubtitle] = useState<string | undefined>(undefined);
    return (
        <NavigationContext.Provider value={{title, subtitle, setTitle, setSubtitle}}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = ({title, subtitle}) => {
    const {setTitle, setSubtitle} = useContext(NavigationContext);
    useEffect(() => {
        setTitle(title);
        setSubtitle(subtitle);
    });
};

interface NavigationProps extends RouteComponentProps {
    user?: any;
    isMenuOpen: boolean;
    onMenuChange(isOpen: boolean);
}

export const Navigation = withUser(
    withRouter((
        {user, location, history, ...props}: NavigationProps) => {
            const {setSubtitle, setTitle, ...navigationData} = useContext(NavigationContext);
            const route = getRoute(getPathWithoutParams(location));
            const titleProps = {
                title: '',
                subtitle: '',
                ...navigationData,
                ...(route && route.data || {}),
            };
            return (
                <Nav
                    {...titleProps}
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
