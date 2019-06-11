import React from 'react';
import Logo from './logo.svg';
import withStyles, {CSSProperties, WithStyles} from '@material-ui/core/styles/withStyles';
import {Theme} from '@material-ui/core';
import {secondaryColor} from '../../shared/themes/defaultTheme';

const styles = (theme: Theme) => ({
    root: {
        position: 'absolute',
        background: secondaryColor,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    } as CSSProperties,
});

export const SplashScreen = withStyles(styles)(({classes}: WithStyles<typeof styles>) => (
    <div className={classes.root}>
        <Logo/>
    </div>
));
