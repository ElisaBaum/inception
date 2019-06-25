import {BoardGame} from './types/boardGame/BoardGame';
import {Book} from './types/book/Book';
import {Location} from './types/location/Location';
import {Music} from './types/music/Music';
import {VideoGame} from './types/videoGame/VideoGame';
import {Movie} from './types/movie/Movie';

export type Media = BoardGame | Book | Location | Music | VideoGame | Movie;

export const createIdFromExtId = (type: string, extId: string) =>
    `${type}#${extId}`;
