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
    }

    type Mutation {
        createMovieRating(movieId: String!, value: Int!): Rating!
    }
`;

const firestore = admin.firestore();

const resolvers: IResolvers = {
    Query: {
        movie: (obj, {movieId}, context, info) => getMovie(movieId)
    },
    Mutation: {
        createMovieRating: async (source, {movieId, value}) => {
            let movie: any = await firestore
                .collection('movies')
                .doc(movieId)
                .get();
            if (!movie) {
                movie = await getMovie(movieId);
                firestore.doc('movies').create(movie);
            }
            await firestore.doc('movieRatings').create({
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
