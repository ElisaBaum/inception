import {IResolvers} from 'graphql-tools';
import {authenticated} from '../common/authentication';
import {getMediaByExtId, getMediaList} from './mediaService';
import {getRatings} from '../ratings/ratingService';

const commonMediaTypeResolvers = {
    ratings: (media, args, context, info) => getRatings([['media.id', '==', media.id]])
};

export const mediaResolvers: IResolvers = {
    Query: {
        mediaByExtId: authenticated((obj, {type, extId}, context, info) =>
            getMediaByExtId(type, extId)),
        mediaList: authenticated(() => getMediaList()),
    },
    Media: {
        __resolveType: (obj, context, info) => obj.type,
    },
    Movie: {
        ...commonMediaTypeResolvers,
    }
};
