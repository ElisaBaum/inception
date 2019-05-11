import withStyles from '@material-ui/core/styles/withStyles';
import {defaultColor} from '../themes/defaultTheme';
import MuiIcon, {IconProps} from '@material-ui/core/Icon/Icon';
import * as React from 'react';

const styles = theme => ({
    root: {
        color: defaultColor
    }
});

export const Icon = withStyles(styles)(MuiIcon) as React.ComponentType<IconProps>;
