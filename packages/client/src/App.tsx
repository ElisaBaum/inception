import * as React from 'react';
import {SignIn} from './user/SignIn/SignIn';

export const App = () => {

    return (
        <div className="test">Inception App, changed by Bär
            <SignIn/>
            <button onClick={() => {

            }}>call fn</button>
        </div>
    );
};
