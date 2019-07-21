import {SET_SEARCH_ERROR, SET_SEARCH_QUERY, SET_SEARCH_RESULTS} from './searchActions';

export interface SearchState {
    query: string;
    searchResults: any[];
    searchStatus?: 'loading' | 'success' | 'error' | 'empty';
    error?: any;
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
                searchStatus: action.payload.length ? 'success' : 'empty',
            };
        case SET_SEARCH_ERROR:
            return {
                ...state,
                searchStatus: 'error',
                error: action.payload,
            };
        default:
            return state;
    }
}
