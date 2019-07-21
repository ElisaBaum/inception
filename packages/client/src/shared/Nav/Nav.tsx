import React, {ReactNode} from 'react';
import Grid from '@material-ui/core/Grid';
import {H1} from '../Headline/H1';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import {H3} from '../Headline/H3';

const styles = theme => ({
    navContainer: {
        position: 'relative' as 'relative',
        zIndex: 1999,
        flexGrow: 1,
        padding: `0 ${theme.spacing.unit * .5}px`,
        width: '100%',
        margin: 0,
    },
    h1: {
        marginBottom: '.25rem',
    }
});

type NavProps = {
    title: string;
    leftItem: ReactNode;
    rightItem: ReactNode;
    subtitle?: string;
} & WithStyles<typeof styles>;

export const Nav = withStyles(styles)(({
                                           classes: {navContainer, h1},
                                           title,
                                           leftItem,
                                           rightItem,
                                           subtitle,
                                       }: NavProps) => (
    <Grid container
          alignItems={'center'}
          spacing={8}
          justify="space-between"
          className={navContainer}>
        <Grid item>
            {leftItem}
        </Grid>
        <Grid item>
            <Grid container
                  direction={'column'}
                  alignItems={'center'}
                  justify={'center'}>
                <Grid item>
                    <H1 className={h1}>{title}</H1>
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
));
