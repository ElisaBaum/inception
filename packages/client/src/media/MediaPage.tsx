import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import {Section} from '../shared/Section/Section';
import {RoundedHeader} from '../shared/RoundedHeader/RoundedHeader';
import {useNavigation} from '../Navigation';
import {RatingCircle} from '../ratings/RatingCircle';
import {MediaType} from '../media/types';
import {useSelector} from 'react-redux';
import {getCurrentMedia} from './mediaSelectors';

declare module '../media/types' {
    interface MediaType {
        getMediaPageData(media: any): { title: string; subtitle: string };
    }
}

const useStyles = makeStyles({
    avgRatingTitle: {
        color: '#bfc4d7',
        fontSize: '.8rem',
    }
});

type MediaPageProps = {};

export const MediaPage = ({}: MediaPageProps) => {
    const classes = useStyles();
    const media = useSelector(getCurrentMedia);
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
};
