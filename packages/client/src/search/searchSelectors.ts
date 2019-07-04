import {createSelector} from 'reselect';
import {SearchState} from './searchReducer';
import {State} from '../core/store';

export const getSearchState = (state: State): SearchState => state.search;

export const getQuery = createSelector(
    getSearchState,
    state => state.query,
);

export const getSearchResults = createSelector(
    getSearchState,
    state => state.searchResults,
);

export const getSearchStatus = createSelector(
    getSearchState,
    state => state.searchStatus,
);
