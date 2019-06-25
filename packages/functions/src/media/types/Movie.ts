import {getMovie, Movie} from '@baum/ic-common';
import {firestore} from 'firebase-admin';
import {config} from 'firebase-functions';

import {commonMediaTypeResolvers} from '../mediaTypeResolvers';
import {MediaType} from './index';

// Exposes firebase env variables for movieAgent
const movieConfig = config().movie || {};
process.env.MOVIE_API_KEY = movieConfig.apikey;

type FirestoreMovie = {
    [K in keyof Movie]: K extends 'releaseDate'
        ? firestore.Timestamp
        : Movie[K]
};
type MovieMedia = FirestoreMovie;

export const mapToMedia = (movie): FirestoreMovie => ({
    ...movie,
    releaseDate: firestore.Timestamp.fromMillis(Date.parse(movie.releaseDate))
});

export default {
    getMedia: id => getMovie(id).then(mapToMedia),
    mapToPreviewMedia: ({id, title, releaseDate, type}: MovieMedia) => ({
        id, type, title, releaseDate,
    }),
    typeResolvers: {
        Movie: {
            ...commonMediaTypeResolvers,
            releaseDate: (movie, args, context, info) => movie.releaseDate.toDate().toISOString(),
        },
    },
} as MediaType;
