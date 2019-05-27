import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import * as strongErrorHandler from 'strong-error-handler';
import {ApolloServer, gql, IResolvers} from 'apollo-server-express';

// Initializing app before using any firebase services is important
admin.initializeApp();

import {ratingMutation} from './rating';
import {mediaQuery} from './media';


const typeDefs = gql`
    type User {
        id: String
        name: String
    }

    union Media = Movie

    type Movie {
        id: String
        type: String
        title: String
        releaseDate: String
        genres: [String]
    }

    type Rating {
        id: String
        rating: Int
        type: String
        review: String
        mediaId: String
        userId: String
        creationDate: String
    }

    type Query {
        mediaByExtId(type: String!, extId: String!): Media
        mediaList: [Media]
    }

    type Mutation {
        upsertRatingByExtId(type: String!, extMediaId: String!, rating: Int!): Rating!
    }
`;

const resolvers: IResolvers = {
    Query: {
        ...mediaQuery,
    },
    Mutation: {
        ...ratingMutation,
    }
};

const apolloServer = new ApolloServer({typeDefs, resolvers});

const auth = () => async (req, res, next) => {
    const [_, tokenId] = req.get('Authorization').split('Bearer ');
    try {
        await admin.auth().verifyIdToken(tokenId);
        next();
    } catch (e) {
        next(e);
    }
};

const app = express();

app.use(cors());
// app.use(auth());

apolloServer.applyMiddleware({app});

app.use(strongErrorHandler());

export const api = functions.https.onRequest(app);
