import * as functions from 'firebase-functions';
import {Rating} from './Rating';
import {getFriends} from '../users/friends/friends';
import {upsertRatingInStream} from '../users/stream/stream';

export const upsertRatingToFriendsStream = functions.firestore
    .document('ratings/{ratingId}')
    .onWrite(async (snap, context) => {
        guardIssue358(upsertRatingToFriendsStream, context);

        const rating = snap.after.data() as unknown as Rating | undefined;

        if (rating) {
            const friends = await getFriends(rating.user.id);
            await Promise.all(friends.map(friend => upsertRatingInStream(friend.id, rating)));
        }
    });

function guardIssue358(fn, context) {
    if (typeof context.params === 'undefined') {
        context.params = {};
    }
    if (Object.keys(context.params).length !== 0) {
        return;
    }
    // slightly modified version of cloud_functions.ts:_makeParams
    const WILDCARD_REGEX = new RegExp('{[^/{}]*}', 'g');
    const triggerResource = fn.__trigger.eventTrigger.resource;
    const wildcards = triggerResource.match(WILDCARD_REGEX);
    if (wildcards) {
        const triggerResourceParts = triggerResource.split('/');
        const eventResourceParts = context.resource.split('/');
        for (const wildcard of wildcards) {
            const wildcardNoBraces = wildcard.slice(1, -1);
            const position = triggerResourceParts.indexOf(wildcard);
            context.params[wildcardNoBraces] = eventResourceParts[position];
        }
    }
}
