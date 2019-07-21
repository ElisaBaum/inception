import {BaseMedia} from '../../BaseMedia';

export interface BoardGame extends BaseMedia {
    type: 'BoardGame';
    name: string;
}
