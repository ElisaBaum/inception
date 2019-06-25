import * as admin from 'firebase-admin';
import {createIdFromExtId} from '@baum/ic-common';

import {listFactory} from '../common/firestore';
import {createMediaFromExt, getMediaByExtId, mapToPreviewMedia} from '../media/mediaService';
import {Rating, UpsertFromExtRatingData, UpsertRatingData} from './Rating';
import Timestamp = admin.firestore.Timestamp;

const collection = () => admin.firestore().collection('ratings');

export const getRatings = listFactory(collection);

export const upsertRatingByExtId = async ({extMediaId, ...data}: UpsertFromExtRatingData) => {
    const media = (await getMediaByExtId(data.type, extMediaId)) ||
        (await createMediaFromExt(data.type, extMediaId));
    const id = createIdFromExtId(media.id, data.user.id);
    const previewMedia = mapToPreviewMedia(media);

    return upsertRating(id, {media: previewMedia, ...data});
};

export const upsertRating = async (id: string, data: UpsertRatingData): Promise<Rating> => {
    const rating = {id, timestamp: Timestamp.now(), ...data};
    await collection().doc(id).set(rating, {merge: true});
    return rating;
};
