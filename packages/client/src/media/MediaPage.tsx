import React from 'react';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import {Media} from '@baum/ic-common';

import {Section} from '../shared/Section/Section';
import {RoundedHeader} from '../shared/RoundedHeader/RoundedHeader';
import {useNavigation} from '../Navigation';
import {RatingCircle} from '../ratings/RatingCircle';
import {RouteProps} from 'react-router';
import {MediaType, mediaTypes} from '../media/types';

declare module '../media/types' {
    interface MediaType {
        getMediaPageData(media: any): {title: string; subtitle: string};
    }
}

const styles = theme => ({
    avgRatingTitle: {
        color: '#bfc4d7',
        fontSize: '.8rem',
    }
});

type MediaPageProps = WithStyles<typeof styles> & RouteProps;

export const MediaPage = withStyles(styles)(({classes, location}: MediaPageProps) => {
    const media = mediaTypes[location.state.media.type].getMediaPageData(location.state.media);
    useNavigation({...media});
    return (
        <>
            <RoundedHeader>
                <RatingCircle rating={7}/>
                <div className={classes.avgRatingTitle}>
                    Average Rating
                </div>
            </RoundedHeader>
            <Section title={'Ratings'}>
                media
            </Section>
            <Section title={'Reviews'}>
                media
            </Section>
        </>
    );
});
