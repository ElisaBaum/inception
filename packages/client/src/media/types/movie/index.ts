import {MediaType} from '../index';
import {Movie} from '@baum/ic-common';

export default {
    getRatingCardData: (movie: Movie) => ({
        title: movie.title,
        subtitle: movie.releaseDate,
        icon: 'movie_creation',
    }),
} as MediaType;
