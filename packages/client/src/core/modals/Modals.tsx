import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import Modal from '@material-ui/core/Modal';
import DialogContent from '@material-ui/core/DialogContent';

import {getModalsState} from './modalsSelectors';
import {closeModal, openModal} from './modalsActionCreators';

export interface ModalsProps {
    modals: { [modalKey: string]: { open: boolean } };
    componentMap: { [modalKey: string]: ComponentType };
    open: typeof closeModal;
    close: typeof openModal;
}

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
                    <Modal
                        key={modalKey}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={modals[modalKey].open}
                        onClose={() => close({modalKey})}>
                        <DialogContent>
                            <button onClick={() => close({modalKey})}>
                                Close
                            </button>
                            <ModalContent/>
                        </DialogContent>
                    </Modal>
                );
            })}
    </>
));
