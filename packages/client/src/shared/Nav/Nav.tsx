import React, {ReactNode} from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

import {H1} from '../Headline/H1';
import {H3} from '../Headline/H3';

const useStyles = makeStyles(theme => ({
    navContainer: {
        position: 'relative' as 'relative',
        zIndex: 1999,
        flexGrow: 1,
        padding: theme.spacing(0, .5),
        width: '100%',
        margin: 0,
    },
    h1: {
        marginBottom: '.25rem',
    }
}));

type NavProps = {
    title: string;
    leftItem: ReactNode;
    rightItem: ReactNode;
    subtitle?: string;
};

export const Nav = ({title, leftItem, rightItem, subtitle}: NavProps) => {
    const classes = useStyles();
    return (
        <Grid container
              alignItems={'center'}
              spacing={1}
              justify="space-between"
              className={classes.navContainer}>
            <Grid item>
                {leftItem}
            </Grid>
            <Grid item>
                <Grid container
                      direction={'column'}
                      alignItems={'center'}
                      justify={'center'}>
                    <Grid item>
                        <H1 className={classes.h1}>{title}</H1>
                    </Grid>
                    {subtitle && (
                        <Grid item>
                            <H3>{subtitle}</H3>
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <Grid item>
                {rightItem}
            </Grid>
        </Grid>
    );
};
