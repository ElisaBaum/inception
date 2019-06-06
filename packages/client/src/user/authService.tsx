import React from 'react';
import {firebase} from '../shared/firebase';
import {store} from '../store';
import {setUnAuthenticated, setTokenId, authenticate} from './userActionsCreators';

const auth = firebase.auth();

export type Provider = keyof typeof authProviders;

const authProviders = {
    google: new firebase.auth.GoogleAuthProvider(),
    facebook: new firebase.auth.FacebookAuthProvider(),
    gitHub: new firebase.auth.GithubAuthProvider(),
    twitter: new firebase.auth.TwitterAuthProvider(),
};

export const signInWithProvider = (provider: Provider) => auth.signInWithPopup(authProviders[provider]);
export const signOut = () => auth.signOut();

auth.onAuthStateChanged(async user => {
    if (user) {
        const tokenId = await user.getIdToken(true);
        store.dispatch(setTokenId(tokenId));
        store.dispatch(authenticate());
    } else {
        store.dispatch(setUnAuthenticated());
    }
});
