import React from 'react';
import {Grid, WithStyles} from '@material-ui/core';
import {H1} from '../Headline/H1';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import {H3} from '../Headline/H3';
import {Icon} from '../Icon/Icon';

const styles = theme => ({
    navContainer: {
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
    subTitle?: string;
} & WithStyles<typeof styles>;

export const Nav = withStyles(styles)(({
                                           classes: {navContainer, h1},
                                           title,
                                           subTitle,
                                       }: NavProps) => (
    <Grid container
          alignItems={'center'}
          spacing={8}
          justify="space-between"
          className={navContainer}>
        <Grid item>
            <IconButton aria-label="Previous">
                <Icon>{'arrow_back'}</Icon>
            </IconButton>
        </Grid>
        <Grid item>
            <Grid container
                  direction={'column'}
                  alignItems={'center'}
                  justify={'center'}>
                <Grid item>
                    <H1 className={h1}>{title}</H1>
                </Grid>
                {subTitle && (
                    <Grid item>
                        <H3>{subTitle}</H3>
                    </Grid>
                )}
            </Grid>
        </Grid>
        <Grid item>
            <IconButton aria-label="Menu">
                <Icon>{'menu'}</Icon>
            </IconButton>
        </Grid>
    </Grid>
));
