import {BaseMedia} from '../../BaseMedia';

export interface Music extends BaseMedia {
    type: 'Music';
    name: string;
    artist: string;
}
