import {Media} from '../media/Media';

export interface Movie extends Media {
    title: string;
    releaseDate: string;
    genres: string[];
}
