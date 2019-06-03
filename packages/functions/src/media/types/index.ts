import {readdirSync} from 'fs';
import {basename, join} from 'path';

interface MediaType {
    typeResolvers: object;
    getMedia(id: string): Promise<{ id: string }>;
    mapToPreviewMedia(media: any): any;
}

export const mediaTypes = (() => {
    const dirPath = join(__dirname);
    return readdirSync(dirPath)
        .filter(path => !/index/.test(path))
        .reduce((acc, path) => ({
            ...acc,
            [basename(path, '.js')]: require(join(dirPath, path)),
        }), {});
})() as { [type: string]: MediaType };

export const mediaTypeList = Object.entries(mediaTypes).map(([key, value]) => ({
    type: key,
    ...value,
}));
