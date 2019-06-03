import {getMovie, Movie} from '@baum/ic-common/movies';
import {firestore} from 'firebase-admin';
import {commonMediaTypeResolvers} from '../mediaTypeResolvers';
import {Media} from '../Media';

type FirestoreMovie = {
    [K in keyof Movie]: K extends 'releaseDate'
        ? firestore.Timestamp
        : Movie[K]
};

type MovieMedia = FirestoreMovie & Media;

export const getMedia = id => getMovie(id).then(mapToMedia);

export const mapToMedia = (movie: Movie): FirestoreMovie => ({
    ...movie,
    releaseDate: firestore.Timestamp.fromMillis(Date.parse(movie.releaseDate))
});

export const typeResolvers = {
    Movie: {
        ...commonMediaTypeResolvers,
        releaseDate: (movie, args, context, info) => movie.releaseDate.toDate().toISOString(),
    },
};

export const mapToPreviewMedia = ({id, title, releaseDate, type}: MovieMedia) => ({
    id, type, title, releaseDate,
});
