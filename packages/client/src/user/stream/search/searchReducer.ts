import {SET_SEARCH_QUERY} from './searchActions';

export interface SearchState {
    query: string;
}

const initialState = {
    query: ''
};

export default function(state = initialState, action): SearchState {
    switch (action.type) {
        case SET_SEARCH_QUERY:
            return {
                ...state,
                query: action.payload,
            };
        default:
            return state;
    }
}
