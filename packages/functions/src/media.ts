import * as admin from 'firebase-admin';
import {getMovie} from '@baum/ic-common/movies/movieAgent';

const firestore = admin.firestore();
const collection = firestore.collection('media');

export const getMediaList = async (limit = 100) =>
    (await collection.limit(limit).get()).docs
        .map(doc => ({id: doc.id, ...doc.data()}));

export const getMedia = async (id: string) => {
    const docRef = await collection.doc(id).get();
    if (docRef.exists) {
        return {id, ...docRef.data()};
    }
};

export const createMedia = async (id: string, data: any) => {
    const media = {id, ...data};
    await collection.doc(id).create(media);
    return media;
};

export const getExtMedia = (type: string, extId: string) => {
    const mediaExtAgentMap = {
        movie: getMovie,
    };
    return mediaExtAgentMap[type](extId);
};

export const getMediaByExtId = (type: string, extId: string) =>
    getMedia(createIdFromExtId(type, extId));

export const createMediaFromExt = async (type: string, extId: string) => {
    const {id: unusedExtId, ...data} = await getExtMedia(type, extId);
    return createMedia(createIdFromExtId(type, extId), {type, ...data});
};

export const createIdFromExtId = (type: string, extId: string) => `${type}#${extId}`;

export const mediaQuery = {
    mediaByExtId: (obj, {type, extId}, context, info) => getMediaByExtId(type, extId),
    mediaList: () => getMediaList(),
};
