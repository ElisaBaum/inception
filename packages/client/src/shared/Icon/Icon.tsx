import withStyles from '@material-ui/core/styles/withStyles';
import {primaryColor} from '../themes/defaultTheme';
import MuiIcon, {IconProps} from '@material-ui/core/Icon/Icon';
import * as React from 'react';

const styles = (color) => () => ({
    root: {
        color
    }
});

const DefaultIcon = (color) => withStyles(styles(color))(MuiIcon) as React.ComponentType<IconProps>;

export const Icon = DefaultIcon(primaryColor);

export const WhiteIcon = DefaultIcon('#ffffff');
