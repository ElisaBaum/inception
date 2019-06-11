import React from 'react';
import {Avatar, AvatarProps} from '../../shared/Avatar/Avatar';
import {User} from '../User';

export type UserAvatarProps = { user: User } & AvatarProps;

export const UserAvatar = ({user, ...props}: UserAvatarProps) => (
    <Avatar {...props}>
        {getAbbreviation(user.name)}
    </Avatar>
);

export const getAbbreviation = (name: string) => name.substr(0, 2);
