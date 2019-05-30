import app from 'firebase/app';
import 'firebase/auth';

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

import ApolloClient, {gql} from 'apollo-boost';

auth.onAuthStateChanged(async user => {
    if (user) {
        try {
            const token = await user.getIdToken();

            const client = new ApolloClient({
                uri: 'http://localhost:5001/inception-1b143/us-central1/api/graphql',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            const result = await client.mutate({
                mutation: gql`
                    mutation {
                        createUserByFriendInvite(name: "Robin", inviteToken: "test") {
                            id
                        }
                    }
                `
            });
            const result2 = await client.query({
                query: gql`
                    query {
                        me {
                            id,
                            name
                        }
                    }
                `
            });
            console.log(result, result2);
        } catch (e) {
            console.error(e);
        }
    }
});
