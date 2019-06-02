import {getMovie, Movie} from '@baum/ic-common/movies';
import {firestore} from 'firebase-admin';
import {commonMediaTypeResolvers} from '../mediaTypeResolvers';

export const getMedia = id => getMovie(id).then(mapToMedia);

export const mapToMedia = (movie: Movie) => ({
    ...movie,
    releaseDate: firestore.Timestamp.fromMillis(Date.parse(movie.releaseDate))
});

export const typeResolvers = {
    Movie: {
        ...commonMediaTypeResolvers,
        releaseDate: (movie, args, context, info) => movie.releaseDate.toDate().toISOString(),
    },
};
