import {getRatings} from '../ratings/ratingService';

export const commonMediaTypeResolvers = {
    ratings: (media, args, context, info) => getRatings([['media.id', '==', media.id]])
};
