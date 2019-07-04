import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';

import {SearchResultCard} from './SearchResultCard';
import {State} from '../core/store';
import {getSearchResults, getSearchStatus} from './searchSelectors';
import {SearchResultCardSkeleton} from './SearchResultCardSkeleton';

interface SearchResultsProps {
    searchResults: any[];
    searchStatus: 'loading' | 'success';
}

export const SearchResults = connect(
    (state: State) => ({
        searchResults: getSearchResults(state),
        searchStatus: getSearchStatus(state),
    })
)(({searchResults, searchStatus}: SearchResultsProps) => (
    <>
        {searchStatus === 'loading'
            ? (
                <>
                    <Grid item xs={12}>
                        <SearchResultCardSkeleton/>
                    </Grid>
                    <Grid item xs={12}>
                        <SearchResultCardSkeleton/>
                    </Grid>
                </>
            )
            : searchResults.map((searchResult, index) => (
                <Grid item xs={12} key={index}>
                    <SearchResultCard media={searchResult}/>
                </Grid>
            ))}
    </>
));
