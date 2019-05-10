import * as React from 'react';
import CardActions from '@material-ui/core/CardActions/CardActions';
import withStyles from '@material-ui/core/styles/withStyles';
import {Theme} from '@material-ui/core/styles/createMuiTheme';

import {defaultColor} from '../themes/defaultTheme';

const styles = (theme: Theme) => ({
    root: {
        padding: 0,
        justifyContent: 'space-between',
        color: defaultColor,
        fontSize: '.85rem',
        fontWeight: 400,
        marginTop: theme.spacing.unit,
    },
});

export const CardFooter = withStyles(styles)(CardActions);
