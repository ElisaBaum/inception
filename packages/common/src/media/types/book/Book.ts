import {BaseMedia} from '../../BaseMedia';

export interface Book extends BaseMedia {
    type: 'Book';
    title: string;
    author: string;
}
