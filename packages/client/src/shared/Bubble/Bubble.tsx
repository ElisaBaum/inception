import * as React from 'react';
import Avatar, {AvatarProps} from '@material-ui/core/Avatar';

type BubbleProps = {
    color?: string;
} & AvatarProps;

export const Bubble = ({color, ...props}: BubbleProps) => (
    <Avatar {...props} style={{backgroundColor: color}}/>
);
