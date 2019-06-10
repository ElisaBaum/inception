import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import {getModalsState} from './modalsSelectors';
import {closeModal, openModal} from './modalsActionCreators';

export interface ModalsProps {
    modals: { [modalKey: string]: { open: boolean } };
    componentMap: { [modalKey: string]: ComponentType<{onClose()}> };
    open: typeof closeModal;
    close: typeof openModal;
}

const SlideTransition = React.forwardRef(function(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const Modals = connect(
    state => ({
        modals: getModalsState(state),
    }),
    {
        open: openModal,
        close: closeModal,
    },
)(({modals, componentMap, close}: ModalsProps) => (
    <>
        {Object
            .keys(modals)
            .map(modalKey => {
                const ModalContent = componentMap[modalKey];
                return (
                    <Dialog
                        key={modalKey}
                        TransitionComponent={SlideTransition}
                        fullScreen
                        open={modals[modalKey].open}
                        onClose={() => close({modalKey})}>
                            <DialogContent>
                                <ModalContent onClose={() => close({modalKey})}/>
                            </DialogContent>
                    </Dialog>
                );
            })}
    </>
));
