import * as admin from 'firebase-admin';
import {createFactory, getFactory, listFactory} from '../common/firestore';
import {mediaTypes} from './types';

const collection = () => admin.firestore().collection('ratings');

interface Media {
    id: string;
}

export const getMedia = getFactory<Media>(collection);
export const createMedia = createFactory(collection);
export const getMediaList = listFactory<Media>(collection);

export const getMediaFromExt = async (type: string, extId: string) => {
    const mediaType = mediaTypes[type];
    if (!mediaType) {
        throw new Error(`Media Type ${type} does not exist`);
    }
    return mediaType.getMedia(extId);
};

export const getMediaByExtId = (type: string, extId: string) =>
    getMedia(createIdFromExtId(type, extId));

export const createMediaFromExt = async (type: string, extId: string) => {
    const {id: unusedExtId, ...data} = await getMediaFromExt(type, extId);
    return createMedia(createIdFromExtId(type, extId), {
        type,
        ...data,
    });
};

export const createIdFromExtId = (type: string, extId: string) => `${type}#${extId}`;
