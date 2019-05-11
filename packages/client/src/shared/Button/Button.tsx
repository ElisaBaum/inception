import withStyles, {CSSProperties} from '@material-ui/core/styles/withStyles';
import MuiButton, {ButtonProps} from '@material-ui/core/Button';
import {defaultColor, primaryColor, secondaryColor} from '../themes/defaultTheme';
import * as React from 'react';

const styles = (theme) => ({
    root: {
        borderRadius: '.7rem',
        fontSize: '1rem',
        padding: '16px 24px',
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
        padding: '4px 8px',
        color: defaultColor,
    },

    label: {
        textTransform: 'capitalize',
    } as CSSProperties,
});

export const Button = withStyles(styles)(MuiButton) as React.ComponentType<ButtonProps>;

