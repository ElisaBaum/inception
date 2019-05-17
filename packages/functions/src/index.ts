import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import express from 'express';
import strongErrorHandler from 'strong-error-handler';
import cors from 'cors';
import {ApolloServer, gql, IResolvers} from 'apollo-server-express';

const typeDefs = gql`
    type Movie {
        title: String
        releaseDate: String
    }

    type Rating {
        value: Int
    }

    type Query {
        movies: [Movie]
    }

    type Mutation {
        createMovieRating(movieId: String!, ratingValue: Int!): Rating!
    }
`;

const resolvers: IResolvers = {
    Query: {
        movies: () => 'Hello world!',
    },
    Mutation: {
        createMovieRating: (source, {movieId, ratingValue}) => {
            const movie = admin
                .firestore()
                .collection('movies')
                .doc(movieId)
                .get();
            if (!movie) {

            }
        }
    }
};

const apolloServer = new ApolloServer({typeDefs, resolvers});

const auth = () => async (req, res, next) => {
    const [_, token] = req.get('Authorization').split('Bearer ');
    try {
        await admin.auth().verifyIdToken(token);
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
