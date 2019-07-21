import {BaseMedia} from '../../BaseMedia';

export interface Movie extends BaseMedia {
    type: 'Movie';
    extId: any;
    title: string;
    releaseDate?: string;
    genres: string[];
}
