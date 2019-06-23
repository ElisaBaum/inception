import withStyles from '@material-ui/core/styles/withStyles';
import {defaultColor, primaryColor} from '../themes/defaultTheme';
import MuiIcon, {IconProps} from '@material-ui/core/Icon/Icon';
import * as React from 'react';

const styles = (color) => () => ({
    root: {
        color
    }
});

const createIcon = (color) => withStyles(styles(color))(MuiIcon) as React.ComponentType<IconProps>;

export const Icon = createIcon(primaryColor);

export const WhiteIcon = createIcon('#ffffff');

export const DefaultIcon = createIcon(defaultColor);
