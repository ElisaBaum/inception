import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import * as strongErrorHandler from 'strong-error-handler';
import {ApolloServer, gql} from 'apollo-server-express';

import {mergeResolvers} from './common/graphql';
import {userResolvers} from './users/usersResolvers';
import {mediaResolvers} from './media/mediaResolvers';
import {ratingResolvers} from './ratings/ratingsResolvers';
import {addUidToContext} from './common/authentication';

// Workaround for https://github.com/firebase/firebase-functions/issues/437
process.env.GCLOUD_PROJECT = JSON.parse(process.env.FIREBASE_CONFIG as string).projectId;
process.env.X_GOOGLE_NEW_FUNCTION_SIGNATURE = 'true';

admin.initializeApp();

// TODO move to their own modules
const typeDefs = gql`
    type User {
        id: String
        name: String
        ratings(limit: Int, offset: Int): [Rating]
    }
    
    type FriendInvite {
        token: String
        userId: String
        timestamp: String
    }

    union Media = Movie

    type Movie {
        id: String
        type: String
        title: String
        releaseDate: String
        genres: [String]
        ratings(limit: Int, offset: Int): [Rating]
        avgRating: Float
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
        stream(limit: Int, offset: Int, orderBy: String): [Rating]
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
        
        createFriendInvite: FriendInvite

        createUserByFriendInvite(
            name: String!,
            inviteToken: String!
        ): User

        connectMe(inviteToken: String!): User
    }
`;

const resolvers = mergeResolvers(mediaResolvers, ratingResolvers, userResolvers);

const apolloServer = new ApolloServer({
    context: addUidToContext,
    typeDefs,
    resolvers,
});

const app = express();

app.use(cors());

apolloServer.applyMiddleware({app});

app.use(strongErrorHandler()); // TODO Needed ? Seems like apollo does all the work

export const api = functions.https.onRequest(app);

export * from './ratings/ratingFunctions';
