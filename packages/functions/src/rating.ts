import * as admin from 'firebase-admin';
import {createMediaFromExt, getMediaByExtId} from './media';

const firestore = admin.firestore();
const collection = firestore.collection('ratings');

interface UpsertFromExtRatingData {
    type: string;
    rating: number;
    review?: string;
    extMediaId: string;
    userId: string;
}

interface UpsertRatingData {
    type: string;
    rating: number;
    review?: string;
    mediaId: string;
    userId: string;
}

interface Rating extends UpsertRatingData {
    id: string;
}

export const upsertRatingByExtId = async ({extMediaId, ...data}: UpsertFromExtRatingData) => {
    const media = (await getMediaByExtId(data.type, extMediaId)) ||
        (await createMediaFromExt(data.type, extMediaId));
    const id = createIdFromExtId(media.id, data.userId);

    return upsertRating(id, {mediaId: media.id, ...data});
};

export const upsertRating = async (id: string, data: UpsertRatingData): Promise<Rating> => {
    const rating = {id, ...data};
    await collection.doc(id).set(rating, {merge: true});
    return rating;
};

export const createIdFromExtId = (mediaId: string, extId: string) => `${mediaId}#${extId}`;

export const ratingMutation = {
    upsertRatingByExtId: (source, args) =>
        upsertRatingByExtId({userId: 'lW6UHwuRUsSckRsyQjKvOpaZxrn1', ...args}),
};

