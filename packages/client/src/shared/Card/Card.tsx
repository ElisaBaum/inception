import * as React from 'react';
import MuiCard from '@material-ui/core/Card/Card';
import withStyles from '@material-ui/core/styles/withStyles';
import {Theme} from '@material-ui/core/styles/createMuiTheme';

const styles = (theme: Theme) => ({
    root: {
        padding: `${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 3}px`,
    }
});

export const Card = withStyles(styles)(MuiCard);
