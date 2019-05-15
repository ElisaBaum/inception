import axios from 'axios';
import {MovieResult} from './MovieResult';
import {Movie} from '../Movie';
import {throwError} from '../../shared/errorUtils';

const movieHttpClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.MOVIE_API_KEY || throwError('MOVIE_API_KEY environment variable missing'),
    }
});

interface SearchMoviesResponse {
    page: number;
    results: MovieResult[];
    total_pages: number;
    total_results: number;
}

const mapMovie = ({original_title, release_date}: MovieResult): Movie => ({
    title: original_title,
    releaseDate: release_date,
});

export const searchMovies = query =>
    movieHttpClient
        .get<SearchMoviesResponse>('/search/movie', {params: {query}})
        .then(({data}) => data.results.map(mapMovie));
