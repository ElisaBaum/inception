import * as React from 'react';
import Avatar, {AvatarProps} from '@material-ui/core/Avatar';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

const styles = (theme) => ({
    root: {
        fontSize: '1rem'
    },
    large: {
        width: 6 * theme.spacing.unit,
        height: 6 * theme.spacing.unit,
    },
    normal: {
        width: 4 * theme.spacing.unit,
        height: 4 * theme.spacing.unit,
    }
});

type BubbleProps = {
    color?: string;
    size?: 'normal' | 'large';
} & AvatarProps & WithStyles<typeof styles> ;

export const Bubble = withStyles(styles, {withTheme: true})(({color, size = 'normal', classes, ...props}: BubbleProps) => (
    <Avatar style={{backgroundColor: color}}
            classes={{root: classes.root}}
            className={classNames(size && classes[size])}
            {...props} />
));
