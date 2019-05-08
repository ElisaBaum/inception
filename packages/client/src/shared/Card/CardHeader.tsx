import * as React from 'react';
import MuiCardHeader from '@material-ui/core/CardHeader/CardHeader';
import Icon from '@material-ui/core/Icon/Icon';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import {Theme} from '@material-ui/core/styles/createMuiTheme';

import {H2} from "../Headline/H2";

const styles = (theme: Theme) => ({
    root: {
        padding: 0,
        marginBottom: theme.spacing.unit,
    },
    avatar: {
        marginRight: theme.spacing.unit,
    }
});

export interface CardHeaderProps extends WithStyles<typeof styles> {
    title: string;
    icon?: string;
}

export const CardHeader = withStyles(styles)(({title, icon, classes}: CardHeaderProps) => (
    <MuiCardHeader classes={classes}
                   title={<H2>{title}</H2>}
                   avatar={icon && <Icon fontSize="small">{icon}</Icon>}
    />
));
