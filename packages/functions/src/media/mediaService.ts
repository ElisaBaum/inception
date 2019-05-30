import * as admin from 'firebase-admin';
import {getMovie, Movie} from '@baum/ic-common/movies';
import {createFactory, getFactory, listFactory} from '../common/firestore';

const firestore = admin.firestore();
const collection = firestore.collection('media');

type Firestore = Movie;

export const getMedia = getFactory<Firestore>(collection);
export const createMedia = createFactory(collection);
export const getMediaList = listFactory<Firestore>(collection);

export const getMediaFromExt = (type: string, extId: string) => {
    const extMediaCaller = {
        Movie: getMovie,
    }[type];

    if (!extMediaCaller) {
        throw new Error(`Media Type "${type}" not supported`);
    }
    return extMediaCaller(extId);
};

export const getMediaByExtId = (type: string, extId: string) =>
    getMedia(createIdFromExtId(type, extId));

export const createMediaFromExt = async (type: string, extId: string) => {
    const {id: unusedExtId, ...data} = await getMediaFromExt(type, extId);
    return createMedia(createIdFromExtId(type, extId), {type, ...data});
};

export const createIdFromExtId = (type: string, extId: string) => `${type}#${extId}`;
