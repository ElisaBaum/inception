import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import React from 'react';

const styles = theme => ({
    header: {
        height: '200px',
        paddingTop: '50%',
        marginTop: '-50%',
        background: 'white',
        borderBottomRightRadius: '50%',
        borderBottomLeftRadius: '50%',
        boxShadow: '0 0 6px #EEEFF4',
    },
    content: {
        display: 'flex' as 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center',
        paddingTop: '1rem',
    },
});
type RoundedHeaderProps = {children: any} & WithStyles<typeof styles>;

export const RoundedHeader = withStyles(styles)(({classes, children}: RoundedHeaderProps) => (
    <div className={classes.header}>
        <div className={classes.content}>
            {children}
        </div>
    </div>
));
