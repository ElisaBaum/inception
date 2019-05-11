import React, {ReactNode} from 'react';
import {Grid, WithStyles} from '@material-ui/core';
import {H1} from '../Headline/H1';
import Icon from '@material-ui/core/Icon';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    navContainer: {
        flexGrow: 1,
        padding: theme.spacing.unit,
        width: '100%',
        margin: 0,
    },
});

type NavProps = {
    title: string;
    subTitle?: string;
    leftRender?: () => ReactNode;
    rightRender?: () => ReactNode;
} & WithStyles<typeof styles>;

export const Nav = withStyles(styles)(({
                                           classes: {navContainer},
                                           leftRender,
                                           rightRender,
                                           title,
                                           subTitle,
                                       }: NavProps) => (
    <Grid container
          spacing={8}
          justify="center"
          className={navContainer}>
        <Grid item>{leftRender && leftRender()}</Grid>
        <Grid item>
            <H1>{title}</H1>
            {subTitle}
        </Grid>
        <Grid item>
            <Icon fontSize={'small'}>{'burger'}</Icon>
        </Grid>
    </Grid>
));
