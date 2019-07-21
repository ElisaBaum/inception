import {parse, stringify} from 'query-string';
import flatten from 'lodash.flatten';

import {history} from '../core/history';
import {MediaType, mediaTypeList} from '../media/types';

import {SET_SEARCH_ERROR, SET_SEARCH_QUERY, SET_SEARCH_RESULTS} from './searchActions';

declare module '../media/types' {
    interface MediaType {
        search(query): Promise<any>;
    }
}

export const setSearchResults = (searchResults: any[]) => ({type: SET_SEARCH_RESULTS, payload: searchResults});
export const setSearchQuery = (query: string) => ({type: SET_SEARCH_QUERY, payload: query});
export const setSearchError = (error) => ({type: SET_SEARCH_ERROR, payload: error});
export const processSearchQuery = (query: string) => dispatch => {
    const {q, ...params} = parse(history.location.search);
    const search = stringify({
        ...params,
        ...(query ? {q: query} : {})
    });
    history.replace({...history.location, search});
    dispatch(setSearchQuery(query));
    if (query) {
        dispatch(performSearch(query));
    } else {
        dispatch(setSearchResults([]));
    }
};

export const performSearch = (query) => async dispatch => {
    const SEARCH_RESULT_LIMIT = 5;
    try {
        const searchResults = await Promise
            .all(mediaTypeList.map(mediaType => mediaType.search(query)))
            .then(results => flatten(results.map(arr => arr.slice(0, SEARCH_RESULT_LIMIT))));
        dispatch(setSearchResults(searchResults));
    } catch (e) {
        dispatch(setSearchError(e));
    }
};
export const initSearch = () => dispatch => {
    const {q} = parse(history.location.search);
    if (typeof q === 'string') {
        dispatch(setSearchQuery(q));
        dispatch(performSearch(q));
    }
};
