import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const firestore = admin.firestore();
const users = firestore.collection('users');
const ratings = firestore.collection('ratings');

export const test = functions.https.onRequest(async (req, res) => {
    await users.doc('#1').create({name: 'robi'});
    await ratings.doc('#1').create({
        rating: 1,
        user: {id: '#1', name: 'bär'},
    });
    await ratings.doc('#2').create({
        rating: 1,
        user: {id: '#2', name: 'elli'},
    });
    const docRef = await ratings
        .where('user.id', '==', '#1')
        .where('user.id', '==', '#2')
        .get();
    res.json(docRef.docs.map(ref => ref.data()));
});
