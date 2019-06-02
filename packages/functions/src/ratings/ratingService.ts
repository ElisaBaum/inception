import * as admin from 'firebase-admin';
import {listFactory} from '../common/firestore';
import {createMediaFromExt, getMediaByExtId} from '../media/mediaService';
import {Rating, UpsertFromExtRatingData, UpsertRatingData} from './ratingTypes';
import Timestamp = admin.firestore.Timestamp;

const collection = () => admin.firestore().collection('ratings');

export const getRatings = listFactory(collection);

export const upsertRatingByExtId = async ({extMediaId, ...data}: UpsertFromExtRatingData) => {
    const media = (await getMediaByExtId(data.type, extMediaId)) ||
        (await createMediaFromExt(data.type, extMediaId));
    const id = createIdFromExtId(media.id, data.user.id);

    return upsertRating(id, {media, ...data});
};

export const upsertRating = async (id: string, data: UpsertRatingData): Promise<Rating> => {
    const rating = {id, timestamp: Timestamp.now(), ...data};
    await collection().doc(id).set(rating, {merge: true});
    return rating;
};

export const createIdFromExtId = (mediaId: string, extId: string) => `${mediaId}#${extId}`;

