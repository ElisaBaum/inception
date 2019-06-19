import * as React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

const styles = () => ({
    container: {
        display: 'flex',
    },
    fullWidth: {
        flexGrow: 1,
    },
    centered: {
        justifyContent: 'center',
    },
    rightToLeft: {
        justifyContent: 'flex-end',
    }
});

export interface ContainerProps {
    fullWidth?: boolean;
    centered?: boolean;
    rightToLeft?: boolean;
    children: React.ReactNode;
}

export const Container = withStyles(styles)(
    ({children, fullWidth, centered, rightToLeft, classes}: ContainerProps & WithStyles<typeof styles>) => (
        <div className={classNames(classes.container,
            centered && classes['centered'],
            rightToLeft && classes['rightToLeft'],
            fullWidth && classes['fullWidth'],
        )}>
            {children}
        </div>
    )
) as React.ComponentType<ContainerProps>;
