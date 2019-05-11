import * as React from 'react';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import {Grid} from '@material-ui/core';

const styles = theme => ({
    sectionContainer: {
        flexGrow: 1,
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit * 3,
        paddingLeft: theme.spacing.unit * 1.5,
        paddingRight: theme.spacing.unit * 1.5,
        width: '100%',
        margin: 0,
    },
});

type SectionProps = {
    children: any[];
} & WithStyles<typeof styles>;

export const Section = withStyles(styles)(({classes, children}: SectionProps) => (
    <Grid container spacing={16} className={classes.sectionContainer}>
        {...children}
    </Grid>
));
