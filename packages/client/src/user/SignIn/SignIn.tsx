import React from 'react';
import {signInWithGoogle, signOut} from '../../shared/firebase';

export const SignIn = () => {

    return (
        <>
            <button onClick={() => signInWithGoogle().then(result => {
                console.log(result);
            })}>
                Sign in with google
            </button>
            <button onClick={signOut}>
                Sign out
            </button>
        </>
    );
};
