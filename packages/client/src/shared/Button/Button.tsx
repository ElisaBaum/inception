import * as React from 'react';
import withStyles, {CSSProperties, WithStyles} from '@material-ui/core/styles/withStyles';
import {Theme} from '@material-ui/core/styles/createMuiTheme';
import MuiButton, {ButtonProps as MuiButtonProps} from '@material-ui/core/Button';

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
        padding: `${2 * theme.spacing.unit}px ${3 * theme.spacing.unit}px`,
        boxShadow: 'none',
    } as CSSProperties,

    flatSecondary: {
        background: 'transparent',
        border: `1px solid #E6E7EF`,
        color: primaryColor,
    } as CSSProperties,

    flatPrimary: {
        background: `linear-gradient(45deg, ${secondaryColor} 100%, ${secondaryColor} 100%)`,
        color: 'white',
    },

    sizeSmall: {
        fontSize: '.85rem',
        background: 'transparent',
        padding: `${.5 * theme.spacing.unit}px ${theme.spacing.unit}px`,
        color: defaultColor,
    },

    label: {
        textTransform: 'capitalize',
    } as CSSProperties,

    iconLeft: {
        ...baseButtonIconStyles,
        marginRight: 1.5 * theme.spacing.unit,
    } as CSSProperties,

    iconRight: {
        ...baseButtonIconStyles,
        marginLeft: 1.5 * theme.spacing.unit,
    } as CSSProperties,
});

type ButtonProps = {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
} & MuiButtonProps;

const Icon = ({icon, iconClass}) => (
    <>
        {icon && <span className={iconClass}>{icon}</span>}
    </>
);

export const Button = withStyles(styles)(
    ({
         iconLeft, iconRight, children,
         classes: {iconLeft: iconLeftClass, iconRight: iconRightClass, ...muiClasses}, ...props
     }: ButtonProps & WithStyles<typeof styles>) => (
        <MuiButton {...props} classes={muiClasses}>
            <Icon icon={iconLeft} iconClass={iconLeftClass}/>
            {children}
            <Icon icon={iconRight} iconClass={iconRightClass}/>
        </MuiButton>
    )
) as React.ComponentType<ButtonProps>;
