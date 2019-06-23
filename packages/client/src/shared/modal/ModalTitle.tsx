import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

type ModalTitleProps = {
    title: string
};
export const ModalTitle = ({title}: ModalTitleProps) => (
    <DialogTitle disableTypography>
        <Typography variant={'body1'}
                    align={'center'}>
            {title}
        </Typography>
    </DialogTitle>
);
