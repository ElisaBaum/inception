import * as admin from 'firebase-admin';
import {createIdFromExtId, Media} from '@baum/ic-common';
import {createFactory, getFactory, listFactory} from '../common/firestore';
import {mediaTypes} from './types';

const collection = () => admin.firestore().collection('media');

export const getMedia = getFactory<Media>(collection);
export const createMedia = createFactory(collection);
export const getMediaList = listFactory<Media>(collection);

export const mapToPreviewMedia = (media: Media) =>
    mediaTypes[media.type].mapToPreviewMedia(media);

export const getMediaByExtId = (type: string, extId: string) =>
    getMedia(createIdFromExtId(type, extId));

export const createMediaFromExt = async (type: string, extId: string) => {
    const data = await mediaTypes[type].getMedia(extId);
    return createMedia(data.id, data);
};

