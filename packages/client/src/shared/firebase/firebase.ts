import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';

app.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
});

const auth = app.auth();
const googleProvider = new app.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

auth.onAuthStateChanged(user => {
    console.log(user);
});
const firestore = app.firestore();

export const createMovies = app.functions().httpsCallable('createMovie');

// (async () => {
//     try {
//         const result = await firestore
//             .collection('movies')
//             .add({
//                 title: 'Men in Black',
//             });
//         console.log(result);
//     } catch (e) {
//         console.error(e);
//     }
// })();
