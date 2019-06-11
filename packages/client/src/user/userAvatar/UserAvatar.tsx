import React from 'react';
import {Avatar, AvatarProps} from '../../shared/Avatar/Avatar';
import {User} from '../User';
import withStyles, {CSSProperties} from '@material-ui/core/styles/withStyles';
import {Theme} from '@material-ui/core';

const styles = (theme: Theme) => ({
    root: {
        backgroundImage: `radial-gradient(circle at bottom right, #FF53AA 24%, #492AED 100%)`,
    } as CSSProperties,
});

export type UserAvatarProps = { user: User } & AvatarProps;

export const UserAvatar = withStyles(styles)(({user, classes, ...props}: UserAvatarProps) => (
    <Avatar {...props} classes={classes}>
        {getAbbreviation(user.name)}
    </Avatar>
));

export const getAbbreviation = (name: string) => name.substr(0, 2);
