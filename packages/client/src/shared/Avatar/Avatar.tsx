import * as React from 'react';
import withStyles, {CSSProperties, WithStyles} from '@material-ui/core/styles/withStyles';
import MuiAvatar, {AvatarProps as MuiAvatarProps} from '@material-ui/core/Avatar';
import classNames from 'classnames';

import {defaultColor} from '../themes/defaultTheme';

const styles = (theme) => ({
    root: {
        boxShadow: `0 0 0 0.085rem ${defaultColor}`,
        width: '42px',
        height: '42px',
    } as CSSProperties,
    large: {
        width: '60px',
        height: '60px',
    } as CSSProperties,
});

type AvatarProps = {
    size?: 'large';
} & WithStyles<typeof styles> & MuiAvatarProps;

export const Avatar = withStyles(styles)(({classes, size, ...props}: AvatarProps) => (
    <MuiAvatar classes={{root: classes.root}}
               className={classNames(size && classes[size])}
               {...props} />
));
