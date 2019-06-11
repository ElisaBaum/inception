import {CLOSE_MODAL, OPEN_MODAL} from './modalsActions';

export const openModal = ({modalKey}) => ({type: OPEN_MODAL, modalKey});
export const closeModal = ({modalKey}) => ({type: CLOSE_MODAL, modalKey});
