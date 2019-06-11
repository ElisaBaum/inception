import * as React from 'react';
import withStyles, {CSSProperties, WithStyles} from '@material-ui/core/styles/withStyles';
import MuiBadge, {BadgeProps as MuiBadgeProps} from '@material-ui/core/Badge';
import {Theme} from '@material-ui/core';

import {secondaryColor} from '../themes/defaultTheme';

const baseBadgeCssProperties = {
    backgroundColor: secondaryColor,
    color: 'white',
    boxShadow: `0 0 0 0.085rem ${'white'}`,
    height: '22px',
    minWidth: '22px',
    fontSize: '.8rem',
    fontWeight: 600,
    borderRadius: `50%`,
};

const styles = (theme: Theme) => ({
    default: {
        ...baseBadgeCssProperties,
        transform: `scale(1) translate(50%, -35%)`,
    } as CSSProperties,
    medium: {
        ...baseBadgeCssProperties,
        transform: `scale(1) translate(36%, -20%);`
    } as CSSProperties,
    large: {
        ...baseBadgeCssProperties,
        transform: `scale(1) translate(-15%, 18%)`
    } as CSSProperties
});

type BadgeProps = {
    forSize?: 'medium' | 'large' | 'default';
} & WithStyles<typeof styles> & MuiBadgeProps;

export const Badge = withStyles(styles)(({classes, forSize, ...props}: BadgeProps) => (
    <MuiBadge classes={{badge: classes[forSize || 'default']}}
              {...props} />
));


