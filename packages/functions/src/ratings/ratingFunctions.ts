import * as functions from 'firebase-functions';
import {Rating} from './ratingTypes';
import {getFriends} from '../users/friends/friends';
import {addRatingToStream, updateRatingInStream} from '../users/stream/stream';

export const addRatingToFriendsStream = functions.firestore
    .document('ratings/{ratingId}')
    .onCreate(async (snap, context) => {
        const rating = snap.data() as unknown as Rating | undefined;

        if (rating) {
            const friends = await getFriends(rating.user.id);
            await Promise.all(friends.map(friend => addRatingToStream(friend.id, rating)));
        }
    });

export const updateRatingInFriendsStream = functions.firestore
    .document('ratings/{ratingId}')
    .onUpdate(async (change, context) => {
        const rating = change.after.data() as unknown as Rating | undefined;

        if (rating) {
            const friends = await getFriends(rating.user.id);
            await Promise.all(friends.map(friend => updateRatingInStream(friend.id, rating)));
        }
    });
