import React from 'react';
import {Grid} from '@material-ui/core';

import {Section} from '../shared/Section/Section';
import {SearchField} from './SearchField';
import {SearchResults} from './SearchResults';

export const SearchSection = () => (
    <Section>
        <Grid item xs={12}>
            <SearchField/>
        </Grid>
        <SearchResults/>
    </Section>
);
