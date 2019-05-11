import React, {ReactNode} from 'react';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import {Grid} from '@material-ui/core';
import {H2} from '../Headline/H2';
import {Button} from '../Button/Button';

const styles = theme => ({
    sectionContainer: {
        flexGrow: 1,
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit * 1.5,
        paddingLeft: theme.spacing.unit * 1.5,
        paddingRight: theme.spacing.unit * 1.5,
        width: '100%',
        margin: 0,
    },
});

type SectionProps = {
    title?: string;
    actions?: ReactNode[];
    children: any[];
} & WithStyles<typeof styles>;

export const Section = withStyles(styles)(({title, classes, children}: SectionProps) => (
    <Grid container spacing={16} className={classes.sectionContainer}>
        {title && (
            <Grid item xs={12} container alignItems={'flex-end'} justify={'space-between'}>
                <Grid item><H2>{title}</H2></Grid>
                {/* TODO How to position actions while keep position of title? */}
                {/*<Grid item><Button size={'small'}>Filter</Button></Grid>*/}
            </Grid>
        )}
        {...children}
    </Grid>
));
