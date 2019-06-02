import withStyles from '@material-ui/core/styles/withStyles';
import {defaultColor} from '../themes/defaultTheme';
import MuiIcon, {IconProps} from '@material-ui/core/Icon/Icon';
import * as React from 'react';

const styles = (color) => () => ({
    root: {
        color: color
    }
});

const Icon2 = (color) => withStyles(styles(color))(MuiIcon) as React.ComponentType<IconProps>;

export const Icon = Icon2(defaultColor);

export const WhiteIcon = Icon2('#ffffff');
