import {SET_CURRENT_MEDIA} from './mediaActions';

export interface MediaState {
    currentMedia?: any;
}

const initialState: MediaState = {};

export default function(state = initialState, action): MediaState {
    switch (action.type) {
        case SET_CURRENT_MEDIA:
            return {...state, currentMedia: action.payload};
        default:
            return state;
    }
}
