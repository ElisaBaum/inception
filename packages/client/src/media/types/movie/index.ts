import {MediaType} from '../index';
import {Movie, searchMovies} from '@baum/ic-common';

export default {
    getRatingCardData: (movie: Movie) => ({
        title: movie.title,
        subtitle: movie.releaseDate,
        icon: 'movie_creation',
    }),
    getSearchResultData: (movie: Movie) => ({
        title: movie.title,
        subtitle: movie.releaseDate ? new Date(movie.releaseDate).getFullYear() : undefined,
        icon: 'movie_creation',
    }),
    search: searchMovies,
} as MediaType;
