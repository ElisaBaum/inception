import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import {withUser} from '../user/withUser';
import {RatingCard} from '../ratings/RatingCard';
import {Section} from '../shared/Section/Section';
import {mockRatings} from './mockRating';
import {SearchField} from '../search/SearchField';
import {SearchResults} from '../search/SearchResults';
import {SearchResultCardSkeleton} from '../search/SearchResultCardSkeleton';

interface StreamProps {
    signOut();
}

export const Stream = withUser(({signOut}: StreamProps) => (
    <>
        <Section>
            <Grid item xs={12}>
                <SearchField/>
            </Grid>
            <SearchResults/>
        </Section>
        <Section>
            {mockRatings.map((rating, index) => (
                <Grid item xs={12} key={index}>
                    <RatingCard rating={rating}/>
                </Grid>
            ))}
            <button onClick={signOut}>signout</button>
        </Section>
    </>
));
