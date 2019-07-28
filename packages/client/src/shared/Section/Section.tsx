import React, {ReactNode} from 'react';
import classNames from 'classnames';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import {H2} from '../Headline/H2';
import Grid, {GridProps} from '@material-ui/core/Grid';

const styles = theme => ({
    sectionContainer: {
        flexGrow: 1,
        paddingTop: theme.spacing(),
        paddingBottom: theme.spacing(1.5),
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
        width: '100%',
        margin: 0,
    },
    fullHeight: {
        height: '100%',
    }
});

type SectionProps = {
    title?: string;
    fullHeight?: boolean;
    actions?: ReactNode[];
    children: any[] | any ;
} & WithStyles<typeof styles> & GridProps;

export const Section = withStyles(styles)(({title, classes, children, fullHeight, ...gridProps}: SectionProps) => (
    <Grid container
          spacing={2}
          className={classNames(classes.sectionContainer, fullHeight && classes.fullHeight)}
          {...gridProps}>
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
