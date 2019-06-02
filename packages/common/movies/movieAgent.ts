import axios from 'axios';
import {MovieResult} from './MovieResult';
import {MovieSearchResult} from './MovieSearchResult';

const movieHttpClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.MOVIE_API_KEY || 'd349e6f5d3d53d98fe73da2c7191c781',
    }
});

interface SearchMoviesResponse {
    page: number;
    results: MovieSearchResult[];
    total_pages: number;
    total_results: number;
}

const toMovie = (movie: MovieResult | MovieSearchResult) => ({
    id: movie.id,
    title: movie.original_title,
    releaseDate: new Date(movie.release_date).toISOString(),
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
