import {IResolvers} from 'graphql-tools';
import {upsertRatingByExtId} from './ratingService';

export const ratingResolvers: IResolvers = {
    Query: {
        // stream: authenticated((obj, {type, extId}, context, info) =>
        //     getRatings([['user.id', '=', '']])),
    },
    Mutation: {
        upsertRatingByExtId: (source, args) =>
            upsertRatingByExtId({user: {id: 'lW6UHwuRUsSckRsyQjKvOpaZxrn1'}, ...args}),
    }
};
