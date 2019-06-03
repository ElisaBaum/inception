import {listFactory, upsertFactory} from '../../common/firestore';
import {collection as userCollection} from '../userService';
import {Rating} from '../../ratings/Rating';

const collection = (userId) => userCollection().doc(userId).collection('stream');

export const getStreamFn = userId => listFactory(() => collection(userId));

export const upsertRatingInStream = (userId, rating: Rating) =>
    upsertFactory(() => collection(userId))(
        rating.id,
        rating
    );
