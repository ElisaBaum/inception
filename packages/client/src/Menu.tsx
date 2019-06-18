import React from 'react';
import {push as ReactBurgerMenu} from 'react-burger-menu';
import {Link} from 'react-router-dom';
import {Theme} from '@material-ui/core';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import {routes} from './Routes';
import {Card} from './shared/Card/Card';
import {Button} from './shared/Button/Button';

type MenuProps = {
    isOpen?: boolean;
    pageWrapId: string;
    onStateChange(isOpen: boolean);
} & WithStyles<typeof styles>;

const styles = (theme: Theme) => ({
    '@global': {
        '.bm-item-list': {
            paddingTop: 2 * theme.spacing.unit,
            paddingLeft: '3px',
            marginRight: -1 * theme.spacing.unit,
        },
        '.bm-menu': {
            overflow: 'visible !important',
        },
        '.bm-morph-shape': {
            fill: theme.palette.secondary.main,
        },
    },
    card: {
        height: '100%',
        outline: 'none',
        paddingRight: 6 * theme.spacing.unit,
        paddingLeft: 2 * theme.spacing.unit,
    }
});

export const Menu = withStyles(styles)(({onStateChange, classes, ...props}: MenuProps) => (
    <ReactBurgerMenu right
                     noOverlay
                     disableAutoFocus
                     customBurgerIcon={false}
                     onStateChange={state => onStateChange(state.isOpen)}
                     {...props}>
        <Card className={classes.card}>
            <Typography gutterBottom
                        align={'right'}
                        variant={'h4'}>
                Menu
            </Typography>
            {routes
                .filter(({data: {navTitle}}) => !!navTitle)
                .map(({path, data}, index) => (
                    <MenuButton key={index}
                                fullWidth
                                iconLeft={data.icon}
                                component={Link}
                                size={'large'}
                                onClick={() => onStateChange(false)}
                                to={path}>
                        {data.navTitle}
                    </MenuButton>
                ))}
        </Card>
    </ReactBurgerMenu>
));

const menuButtonStyles = theme => ({
    root: {
        fontSize: '1.35rem',
        fontWeight: 300,
        padding: '6px 24px',
    },
    label: {
        justifyContent: 'left',
    }
});

const MenuButton = withStyles(menuButtonStyles)(Button);
