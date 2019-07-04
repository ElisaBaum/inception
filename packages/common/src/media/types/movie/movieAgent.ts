import axios from 'axios';
import {MovieResult} from './MovieResult';
import {MovieSearchResult} from './MovieSearchResult';
import {createIdFromExtId} from '../../media';

const movieHttpClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

movieHttpClient.interceptors.request.use(config => ({
    ...config,
    params: {
        ...config.params,
        api_key: process.env.MOVIE_API_KEY,
    }
}));

interface SearchMoviesResponse {
    page: number;
    results: MovieSearchResult[];
    total_pages: number;
    total_results: number;
}

const toMovie = (movie: MovieResult | MovieSearchResult) => ({
    id: createIdFromExtId('Movie', String(movie.id)),
    extId: movie.id,
    type: 'Movie',
    title: movie.original_title,
    releaseDate: movie.release_date ? new Date(movie.release_date).toISOString() : undefined,
    ...('genres' in movie ? {
        genres: movie.genres.map(({name}) => name)
    } : {})
});

export const searchMovies = query =>
    movieHttpClient
        .get<SearchMoviesResponse>('/search/movie', {params: {query}})
        .then(({data}) => data.results.map(toMovie));

export const getMovie = movieId =>
    movieHttpClient
        .get<MovieResult>(`/movie/${movieId}`)
        .then(({data}) => toMovie(data));
