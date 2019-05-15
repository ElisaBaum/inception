import React, {useState} from 'react';
import {searchMovies} from './movies/movieAgent/movieAgent';
import {Movie} from './movies/Movie';

export const App = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([] as Movie[]);
    return (
        <div className="test">
            <input type={'text'} value={query} onChange={e => setQuery(e.target.value)}/>
            <button onClick={() => searchMovies(query).then(movies => {
                setResults(movies);
            })}>search</button>
            {
                results.map((result, index) => (
                    <div key={index}>{result.title}</div>
                ))
            }
        </div>
    );
};
