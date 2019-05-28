import * as admin from 'firebase-admin';
import {createMediaFromExt, getMediaByExtId} from './media';
import Timestamp = admin.firestore.Timestamp;

const firestore = admin.firestore();
const collection = firestore.collection('ratings');

interface UpsertFromExtRatingData {
    type: string;
    rating: number;
    review?: string;
    extMediaId: string;
    user: { id: string };
}

interface UpsertRatingData {
    type: string;
    rating: number;
    review?: string;
    media: any;
    user: { id: string };
}

interface Rating extends UpsertRatingData {
    id: string;
    timestamp: any;
}

export const upsertRatingByExtId = async ({extMediaId, ...data}: UpsertFromExtRatingData) => {
    const media = (await getMediaByExtId(data.type, extMediaId)) ||
        (await createMediaFromExt(data.type, extMediaId));
    const id = createIdFromExtId(media.id, data.user.id);

    return upsertRating(id, {media, ...data});
};

export const upsertRating = async (id: string, data: UpsertRatingData): Promise<Rating> => {
    const rating = {id, timestamp: Timestamp.now(), ...data};
    await collection.doc(id).set(rating, {merge: true});
    return {...rating, timestamp: rating.timestamp.toDate().toISOString()};
};

export const createIdFromExtId = (mediaId: string, extId: string) => `${mediaId}#${extId}`;

export const ratingMutation = {
    upsertRatingByExtId: (source, args) =>
        upsertRatingByExtId({user: {id: 'lW6UHwuRUsSckRsyQjKvOpaZxrn1'}, ...args}),
};

