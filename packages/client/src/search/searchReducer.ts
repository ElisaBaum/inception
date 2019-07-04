import {SET_SEARCH_QUERY, SET_SEARCH_RESULTS} from './searchActions';

export interface SearchState {
    query: string;
    searchResults: any[];
    searchStatus?: 'loading' | 'success';
}

const initialState = {
    query: '',
    searchResults: [],
};

export default function(state = initialState, action): SearchState {
    switch (action.type) {
        case SET_SEARCH_QUERY:
            return {
                ...state,
                query: action.payload,
                searchStatus: action.payload ? 'loading' : undefined,
            };
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.payload,
                searchStatus: 'success',
            };
        default:
            return state;
    }
}
