import {CLOSE_MODAL, OPEN_MODAL} from './modalsActions';

export interface ModalsState {
    [modalKey: string]: {
        open: boolean;
    };
}

const initialModalsState = {};

export default function(state = initialModalsState, action): ModalsState {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                [action.modalKey]: {open: true},
            };
        case CLOSE_MODAL:
            return {
                ...state,
                [action.modalKey]: {open: false},
            };
        default:
            return state;
    }
}
