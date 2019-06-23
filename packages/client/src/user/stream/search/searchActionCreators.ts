import {parse, stringify} from 'query-string';
import {history} from '../../../core/history';

import {SET_SEARCH_QUERY} from './searchActions';

export const setSearchQuery = (query: string) => ({type: SET_SEARCH_QUERY, payload: query});
export const processSearchQuery = (query: string) => dispatch => {
    const {q, ...params} = parse(history.location.search);
    const search = stringify({
        ...params,
        ...(query ? {q: query} : {})
    });
    history.replace({...history.location, search});
    dispatch(performSearch(query));
    dispatch(setSearchQuery(query));
};
export const performSearch = (query) => dispatch => {

};
export const initSearch = () => dispatch => {
    const {q} = parse(history.location.search);
    if (typeof q === 'string') {
        dispatch(setSearchQuery(q));
    }
};
