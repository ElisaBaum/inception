import React from 'react';
import {Card} from '../shared/Card/Card';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import {Shimmer} from '../shared/shimmer/Schimmer';

const styles = theme => ({
    card: {
        backgroundColor: '#edeef2',
        paddingLeft: '3.5rem'
    },
    icon: {
        position: 'absolute' as 'absolute',
        left: '2.7rem;',
        height: '1.4rem',
        width: '1.4rem',
        borderRadius: '1.4rem'
    },
    title: {
        height: '16px',
        width: '57%',
        marginBottom: '4px',
    },
    subtitle: {
        height: '14px',
        width: '25%',
    }
});

export const SearchResultCardSkeleton = withStyles(styles)(({classes}: WithStyles<typeof styles>) => {
    return (
        <Card className={classes.card}>
            <Shimmer className={classes.icon}/>
            <Shimmer className={classes.title}/>
            <Shimmer className={classes.subtitle}/>
        </Card>
    );
});
