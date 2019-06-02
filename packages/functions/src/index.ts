import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import * as strongErrorHandler from 'strong-error-handler';
import {ApolloServer, gql} from 'apollo-server-express';
import {mergeResolvers} from './common/graphql';

// Initializing app before using any firebase services is important
admin.initializeApp();

import {userResolvers} from './users/usersResolvers';
import {mediaResolvers} from './media/mediaResolvers';
import {ratingResolvers} from './ratings/ratingsResolvers';

// TODO move to their own modules
const typeDefs = gql`
    type User {
        id: String
        name: String
        ratings(limit: Int, offset: Int): [Rating]
    }

    union Media = Movie

    type Movie {
        id: String
        type: String
        title: String
        releaseDate: String
        genres: [String]
        ratings(limit: Int, offset: Int): [Rating]
    }

    type Rating {
        id: String
        rating: Int
        type: String
        review: String
        media: Media
        user: User
        timestamp: String
    }

    type Query {
        mediaByExtId(type: String!, extId: String!): Media
        mediaList: [Media] # Only for testing
        stream: [Rating]
        user(id: String): User
        me: User
    }

    type Mutation {

        upsertRatingByExtId(
            type: String!,
            extMediaId: String!,
            rating: Int!,
            review: String
        ): Rating!

        createUserByFriendInvite(
            name: String!,
            inviteToken: String!
        ): User

        connectMe(
            inviteToken: String!
        ): User
    }
`;

const resolvers = mergeResolvers(mediaResolvers, ratingResolvers, userResolvers);

const apolloServer = new ApolloServer({
    context: async ({req}) => {
        try {
            const authHeader = req.get('authorization');
            if (authHeader) {
                const [_, tokenId] = authHeader.split('Bearer ');
                const {uid} = await admin.auth().verifyIdToken(tokenId);
                return {uid};
            }
        } catch (e) {
            console.log(e);
        }
        return {}; // OR does throw verifyIdToken anyway??
    },
    typeDefs,
    resolvers,
});

const app = express();

app.use(cors());

apolloServer.applyMiddleware({app});

app.use(strongErrorHandler()); // TODO Needed ? Seems like apollo does all the work

export const api = functions.https.onRequest(app);

// functions.firestore
//     .document('ratings/{ratingId}')
//     .onCreate((snap, context) => {
//         // Get an object representing the document
//         // e.g. {'name': 'Marie', 'age': 66}
//         const newValue = snap.data();
//
//         if (newValue) {
//
//         }
//
//         // access a particular field as you would any JS property
//         const name = newValue.name;
//
//         // perform desired operations ...
//     });
// functions.firestore
//     .document('ratings/{ratingId}')
//     .onUpdate((change, context) => {
//         // Get an object representing the document
//         // e.g. {'name': 'Marie', 'age': 66}
//         const newValue = change.after.data();
//
//         // ...or the previous value before this update
//         const previousValue = change.before.data();
//
//         // access a particular field as you would any JS property
//         const name = newValue.name;
//
//         // perform desired operations ...
//     });
