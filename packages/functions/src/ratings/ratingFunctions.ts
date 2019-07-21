import * as functions from 'firebase-functions';
import {Rating} from './Rating';
import {getFriends} from '../users/friends/friends';
import {upsertRatingInStream} from '../users/stream/stream';

export const upsertRatingToFriendsStream = functions.firestore
    .document('ratings/{ratingId}')
    .onWrite(async (snap, context) => {
        const rating = snap.after.data() as unknown as Rating | undefined;

        if (rating) {
            const friends = await getFriends(rating.user.id);
            await Promise.all(friends.map(friend => upsertRatingInStream(friend.id, rating)));
        }
    });

// export const updateAvgRatingOfMedia = functions.firestore
//     .document('ratings/{ratingId}')
//     .onWrite(async (snap, context) => {
//         const rating = snap.after.data() as unknown as Rating | undefined;
//
//         if (rating) {
//             const friends = await getFriends(rating.user.id);
//             await Promise.all(friends.map(friend => upsertRatingInStream(friend.id, rating)));
//         }
//     });
