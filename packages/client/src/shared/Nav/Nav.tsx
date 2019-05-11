import React, {ReactNode} from 'react';
import {Grid} from '@material-ui/core';
import {H1} from '../Headline/H1';
import Icon from '@material-ui/core/Icon';

interface NavProps {
    title: string;
    subTitle?: string;
    leftRender?: () => ReactNode;
    rightRender?: () => ReactNode;
}

export const Nav = ({
                        leftRender,
                        rightRender,
                        title,
                        subTitle,
                    }: NavProps) => (
    <Grid container justify="center">
        <Grid item>{leftRender && leftRender()}</Grid>
        <Grid item>
            <H1>{title}</H1>
            {subTitle}
        </Grid>
        <Grid item>
            <Icon fontSize={'small'}>{'burger'}</Icon>
        </Grid>
    </Grid>
);
