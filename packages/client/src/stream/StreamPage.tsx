import React, {useContext, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';

import {RatingCard} from '../ratings/RatingCard';
import {Section} from '../shared/Section/Section';
import {mockRatings} from './mockRating';
import {SearchSection} from '../search/SearchSection';
import {connect} from 'react-redux';
import {getQuery} from '../search/searchSelectors';
import {State} from '../core/store';
import {signOut} from '../user/userActionCreators';
import {NavigationContext} from '../Navigation';
import {getUser} from '../user/userSelectors';

interface StreamPageProps {
    query: string;
    user: any;
    signOut();
}

export const StreamPage = connect(
    (state: State) => ({
        query: getQuery(state),
        user: getUser(state),
    }),
    {signOut}
)(
    ({signOut, query, user}: StreamPageProps) => {
        const {setSubtitle} = useContext(NavigationContext);

        useEffect(() => {
            setSubtitle(user.name);
        });

        return (
            <>
                <SearchSection/>
                {!query && (
                    <Section>
                        {mockRatings.map((rating, index) => (
                            <Grid item xs={12} key={index}>
                                <RatingCard rating={rating}/>
                            </Grid>
                        ))}
                        <button onClick={signOut}>signout</button>
                    </Section>
                )}
            </>
        );
    }
);
