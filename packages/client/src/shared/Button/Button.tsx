import withStyles, {CSSProperties} from '@material-ui/core/styles/withStyles';
import MuiButton, {ButtonProps} from '@material-ui/core/Button';
import {defaultColor, primaryColor, secondaryColor} from '../themes/defaultTheme';
import * as React from 'react';

const styles = (theme) => ({
    root: {
        background: `linear-gradient(45deg, ${secondaryColor} 100%, ${secondaryColor} 100%)`,
        borderRadius: '.7rem',
        color: 'white',
        fontSize: '.875rem',
        padding: '16px 24px',
        boxShadow: 'none',
    } as CSSProperties,

    flatSecondary: {
        background: 'transparent',
        border: `1px solid ${defaultColor}`,
        color: primaryColor,
    } as CSSProperties,
    label: {
        textTransform: 'capitalize',
    } as CSSProperties,
});

export const Button = withStyles(styles)(MuiButton) as React.ComponentType<ButtonProps>;

