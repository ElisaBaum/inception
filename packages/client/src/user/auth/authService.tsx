import React from 'react';
import {firebase} from '../../core/firebase';

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
export const onAuthStateChanged = auth.onAuthStateChanged.bind(auth) as typeof auth.onAuthStateChanged;
