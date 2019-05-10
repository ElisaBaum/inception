import * as React from 'react';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    end: {
        width: '100%',
        paddingBottom: '1rem',
    }
});

type SectionProps = {
    children: any[];
} & WithStyles<typeof styles>;

export const Section = withStyles(styles)(({classes, children}: SectionProps) => (
    <>
        {...children}
        <div className={classes.end} />
    </>
));
