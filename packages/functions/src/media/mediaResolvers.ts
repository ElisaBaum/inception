import {IResolvers} from 'graphql-tools';
import {authenticated} from '../common/authentication';
import {getMediaByExtId, getMediaList} from './mediaService';
import {mediaTypeList} from './types';

export const mediaResolvers: IResolvers = {
        Query: {
            mediaByExtId: authenticated((obj, {type, extId}, context, info) =>
                getMediaByExtId(type, extId)),
            mediaList: authenticated(() => getMediaList()),
        },
        Media: {
            __resolveType: (obj, context, info) => obj.type,
        },
        ...(mediaTypeList.reduce((acc, {typeResolvers}) => ({
            ...acc,
            ...typeResolvers,
        }), {}))
    }
;
