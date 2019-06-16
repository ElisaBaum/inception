import * as admin from 'firebase-admin';
import {Media} from '@baum/ic-common/media/Media';
import {createFactory, getFactory, listFactory} from '../common/firestore';
import {mediaTypes} from './types';

const collection = () => admin.firestore().collection('media');

export const getMedia = getFactory<Media>(collection);
export const createMedia = createFactory(collection);
export const getMediaList = listFactory<Media>(collection);

export const getMediaFromExt = (type: string, extId: string) => {
    const mediaType = mediaTypes[type];
    if (!mediaType) {
        throw new Error(`Media Type ${type} does not exist`);
    }
    return mediaType.getMedia(extId);
};

export const mapToPreviewMedia = (media: Media) => {
    const mediaType = mediaTypes[media.type];
    if (!mediaType) {
        throw new Error(`Media Type ${media.type} does not exist`);
    }
    return mediaType.mapToPreviewMedia(media);
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
