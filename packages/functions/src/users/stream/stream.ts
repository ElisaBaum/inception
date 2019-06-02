import {createFactory, listFactory, upsertFactory} from '../../common/firestore';
import {collection as userCollection} from '../userService';
import {Rating} from '../../ratings/ratingTypes';

const collection = (userId) => userCollection().doc(userId).collection('stream');

export const getStreamFn = userId => listFactory(() => collection(userId));

export const addRatingToStream = (userId, rating: Rating) => createFactory(() => collection(userId))(
    rating.id,
    rating
);

export const updateRatingInStream = (userId, rating: Rating) => upsertFactory(() => collection(userId))(
    rating.id,
    rating
);
