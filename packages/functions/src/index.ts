import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import * as strongErrorHandler from 'strong-error-handler';
import {ApolloServer, gql, IResolvers} from 'apollo-server-express';
import {getMovie} from '@baum/ic-common/movies/movieAgent';

admin.initializeApp();

const typeDefs = gql`
    type Movie {
        id: String
        title: String
        releaseDate: String
    }

    type Rating {
        value: Int
    }

    type Query {
        movie(movieId: String!): Movie
        fmovie(movieId: String!): Movie
    }

    type Mutation {
        createMovieRating(movieId: String!, value: Int!): Rating!
    }
`;

const firestore = admin.firestore();


const resolvers: IResolvers = {
    Query: {
        movie: (obj, {movieId}, context, info) => getMovie(movieId),
        fmovie: async (obj, {movieId}, context, info) => {
            const movie = await firestore
                .doc(`movies/${movieId}`)
                .get();
            if (movie.exists) {
                return movie.data();
            }
            throw new Error(`Movie with ID "${movieId}" does not exist`);
        },
    },
    Mutation: {
        createMovieRating: async (source, {movieId, value}) => {
            let movie: any = await firestore
                .doc(`movies/${movieId}`)
                .get();
            if (!movie.exists) {
                movie = await getMovie(movieId);
                await firestore.collection('movies').doc(movieId).create(movie);
            }
            await firestore.collection('movieRatings').doc().create({
                userId: 'lW6UHwuRUsSckRsyQjKvOpaZxrn1',
                movieId,
                value
            });
            return {value};
        }
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
