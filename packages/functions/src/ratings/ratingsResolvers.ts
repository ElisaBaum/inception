import {IResolvers} from 'graphql-tools';
import {upsertRatingByExtId} from './ratingService';
import {authenticated} from '../common/authentication';

export const ratingResolvers: IResolvers = {
    Query: {
        // stream: authenticated((obj, {type, extId}, context, info) =>
        //     getRatings([['user.id', '=', '']])),
    },
    Mutation: {
        upsertRatingByExtId: authenticated((source, args, context) =>
            upsertRatingByExtId({user: context.user, ...args})),
    },
    Rating: {
        timestamp: (rating, args, context, info) => rating.timestamp.toDate().toISOString(),
    }
};
