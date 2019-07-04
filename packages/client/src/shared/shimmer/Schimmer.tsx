import React from 'react';
import classNames from 'classnames';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    '@keyframes shimmering': {
        '0%': {
            backgroundPosition: '-400px 0',
        },
        '100%': {
            backgroundPosition: '400px 0',
        }
    },
    shimmer: {
        display: 'block',
        animationDuration: '1.2s',
        animationFillMode: 'forwards',
        animationIterationCount: 'infinite',
        animationName: 'shimmering',
        animationTimingFunction: 'linear',
        background: 'linear-gradient(to right, #ffffff 8%, #edeef2 18%, #ffffff 33%)',
        backgroundSize: '800px 104px',
    }
});

type SchimmerProps = {
    className?: string;
} & WithStyles<typeof styles>;

export const Shimmer = withStyles(styles)(({classes, className, ...props}: SchimmerProps) =>
    (<div className={classNames(classes.shimmer, className)} {...props}/>));
