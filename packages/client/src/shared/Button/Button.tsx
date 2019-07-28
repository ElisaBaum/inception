import * as React from 'react';
import withStyles, {CSSProperties, WithStyles} from '@material-ui/core/styles/withStyles';
import {Theme} from '@material-ui/core/styles/createMuiTheme';
import MuiButton, {ButtonProps as MuiButtonProps} from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import {defaultColor, primaryColor, secondaryColor} from '../themes/defaultTheme';

const baseButtonIconStyles = {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
        height: '1.25rem',
    }
};

const styles = (theme: Theme) => ({
    root: {
        borderRadius: '.7rem',
        fontSize: '1rem',
        padding: `${theme.spacing(1.75)}px ${theme.spacing(3)}px`,
        boxShadow: 'none',
    } as CSSProperties,

    textSecondary: {
        background: 'transparent',
        border: `1px solid #E6E7EF`,
        color: primaryColor,
    } as CSSProperties,

    textPrimary: {
        background: `linear-gradient(45deg, ${secondaryColor} 100%, ${secondaryColor} 100%)`,
        color: 'white',
    },

    sizeSmall: {
        fontSize: '.85rem',
        background: 'transparent',
        padding: `${theme.spacing(.5)}px ${theme.spacing()}px`,
        color: defaultColor,
    },

    label: {
        textTransform: 'capitalize',
    } as CSSProperties,

    iconLeft: {
        ...baseButtonIconStyles,
        marginRight: theme.spacing(),
    } as CSSProperties,

    iconRight: {
        ...baseButtonIconStyles,
        marginLeft: theme.spacing(),
    } as CSSProperties,

    progress: {
        marginRight: theme.spacing(),
    } as CSSProperties,
});

export type ButtonProps = {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    loading?: boolean;
} & MuiButtonProps;

const Icon = ({icon, iconClass}) => (
    <>
        {icon && <span className={iconClass}>{icon}</span>}
    </>
);

export const Button = withStyles(styles)(
    ({
         iconLeft, iconRight, children, loading,
         classes: {progress, iconLeft: iconLeftClass, iconRight: iconRightClass, ...muiClasses}, ...props
     }: ButtonProps & WithStyles<typeof styles>) => (
        <MuiButton {...props} classes={muiClasses}>
            {(!loading && iconLeft) && (<Icon icon={iconLeft} iconClass={iconLeftClass}/>)}
            {loading && (<CircularProgress className={progress} color={props.color as any} size={28}/>)}
            {children}
            {(!loading && iconRight) && (<Icon icon={iconRight} iconClass={iconRightClass}/>)}
        </MuiButton>
    )
) as React.ComponentType<ButtonProps>;
