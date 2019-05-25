import axios from 'axios';
import {MovieResult} from './MovieResult';
import {MovieSearchResult} from './MovieSearchResult';

const movieHttpClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.MOVIE_API_KEY || 'd349e6f5d3d53d98fe73da2c7191c781',
    }
});

interface SearchMoviesResponse {
    page: number;
    results: MovieSearchResult[];
    total_pages: number;
    total_results: number;
}

export const searchMovies = query =>
    movieHttpClient
        .get<SearchMoviesResponse>('/search/movie', {params: {query}})
        .then(({data}) => data.results.map(({id, original_title, release_date}) => ({
            id,
            title: original_title,
            releaseDate: release_date,
        })));

export const getMovie = movieId =>
    movieHttpClient
        .get<MovieResult>(`/movie/${movieId}`)
        .then(({data: {id, original_title, release_date, genres}}) => ({
            id,
            title: original_title,
            releaseDate: release_date,
            genres: genres.map(({name}) => name),
        }));
