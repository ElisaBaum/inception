import * as React from 'react';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import MuiTextField, {TextFieldProps as MuiTextFieldProps} from '@material-ui/core/TextField';
import MuiIcon from '@material-ui/core/Icon/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';

import {defaultColor, secondaryColor} from '../themes/defaultTheme';

const styles = theme => ({
    input: {
        fontSize: '1rem',
        '&::placeholder': {
            color: defaultColor,
            opacity: 1,
        },
    },
    underline: {
        '&:after': {
            borderBottom: `1px solid ${secondaryColor}`,
        },
        '&:before': {
            borderBottom: `1px solid ${defaultColor} !important`,
        },
    },
});

const Icon = withStyles({
    root: {
        color: defaultColor
    }
})(MuiIcon);

type TextFieldProps = {
    icon: string;
    placeholder: string;
} & MuiTextFieldProps & WithStyles<typeof styles>;

export const TextField = withStyles(styles)(({icon, classes, ...props}: TextFieldProps) => (
    <MuiTextField
        fullWidth
        margin="normal"
        InputLabelProps={{
            disableAnimation: true
        }}
        InputProps={{
            classes,
            startAdornment: (
                <InputAdornment position="start">
                    <Icon fontSize={'small'}>
                        {icon}
                    </Icon>
                </InputAdornment>
            ),
        }}
        {...props}
    />
));
