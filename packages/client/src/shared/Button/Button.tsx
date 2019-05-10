import withStyles, {CSSProperties} from '@material-ui/core/styles/withStyles';
import MuiButton, {ButtonProps} from '@material-ui/core/Button';
import {primaryColor, secondaryColor} from '../themes/defaultTheme';
import * as React from 'react';

const styles = (theme) => ({
    root: {
        background: `linear-gradient(45deg, ${secondaryColor} 100%, ${secondaryColor} 100%)`,
        borderRadius: '.7rem',
        color: 'white',
        fontSize: '1rem',
        padding: '16px 24px',
        boxShadow: 'none',
    } as CSSProperties,

    flatSecondary: {
        background: 'transparent',
        border: `1px solid #E6E7EF`,
        color: primaryColor,
    } as CSSProperties,
    label: {
        textTransform: 'capitalize',
    } as CSSProperties,
});

export const Button = withStyles(styles)(MuiButton) as React.ComponentType<ButtonProps>;

