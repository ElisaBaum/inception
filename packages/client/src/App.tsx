import * as React from 'react';
import {SignIn} from './user/SignIn/SignIn';
import {createMovies} from './shared/firebase/firebase';

export const App = () => {

    return (
        <div className="test">Inception App, changed by Bär
            <SignIn/>
            <button onClick={() => {
                createMovies().then(res => console.log(res));
            }}>call fn</button>
        </div>
    );
};
