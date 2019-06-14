import React from 'react';
import {Theme} from '@material-ui/core';
import DialogContent, {DialogContentProps} from '@material-ui/core/DialogContent';
import withStyles, {CSSProperties, WithStyles} from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${2 * theme.spacing.unit}px ${3 * theme.spacing.unit}px`,
    } as CSSProperties,
});

type ModalActionsProps = DialogContentProps;
type ModalActionsPropsWithStyles = ModalActionsProps & WithStyles<typeof styles>;

export const ModalContent = withStyles(styles)(({classes, children, ...props}: ModalActionsPropsWithStyles) => (
    <DialogContent {...props} className={classes.root}>
        {children}
    </DialogContent>
));
