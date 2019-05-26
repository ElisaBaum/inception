import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import * as strongErrorHandler from 'strong-error-handler';
import {ApolloServer, gql, IResolvers} from 'apollo-server-express';
import {getMovie} from '@baum/ic-common/movies/movieAgent';

admin.initializeApp();

const typeDefs = gql`
    type User {
        id: String
    }
    
    type Movie {
        id: String
        title: String
        releaseDate: String
    }

    type Rating {
        # Change movieId to mediaId, add media field and concat id from media, mediaId, userId
        id: String
        value: Int
        movieId: String
        userId: String
    }

    type Query {
        movie(movieId: String!): Movie
        movies: [Movie]
        fmovie(movieId: String!): Movie
    }

    type Mutation {
        upsertMovieRating(movieId: String!, value: Int!): Rating!
    }
`;

const firestore = admin.firestore();

const movieService = {
    collection: firestore.collection('movies'),
    async getAll(limit = 100) {
        return (await this.collection.limit(limit).get()).docs.map(doc => (
            {id: doc.id, ...doc.data()}
        ));
    },
    get(id) {
        return this.collection.doc(id).get();
    },
    create(id, data) {
        return this.collection.doc(id).create(data);
    }
};

const movieRatingService = {
    collection: firestore.collection('movieRatings'),
    createId({movieId, userId}: { userId: string, movieId: string }) {
        return `${movieId}#${userId}`;
    },
    async upsert(data: { userId: string, movieId: string, value: number }) {
        let movie: any = await movieService.get(data.movieId);
        if (!movie.exists) {
            movie = await getMovie(data.movieId);
            await movieService.create(data.movieId, movie);
        }
        const id = this.createId(data);
        await this.collection.doc(id).set(data, {merge: true});
        return {id, ...data};
    }
};

const resolvers: IResolvers = {
    Query: {
        movies: () => movieService.getAll(),
        movie: async (obj, {movieId}, context, info) => {
            const movie = await movieService.get(movieId);
            if (movie.exists) {
                return movie.data();
            }
            throw new Error(`Movie with ID "${movieId}" does not exist`);
        },
    },
    Mutation: {
        upsertMovieRating: async (source, args) =>
            movieRatingService.upsert({userId: 'lW6UHwuRUsSckRsyQjKvOpaZxrn1', ...args})
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
