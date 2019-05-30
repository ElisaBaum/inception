import React from 'react';
import {signInWithGoogle} from '../../shared/firebase';

export const SignIn = () => {

    return (
        <button onClick={() => signInWithGoogle().then(result => {
            console.log(result);
        })}>
            Sign in with google
        </button>
    );
};
