import {BoardGame} from './BoardGame';
import {Book} from './Book';
import {Location} from './Location';
import {Music} from './Music';
import {VideoGame} from './VideoGame';
import {Movie} from '../movies';

export type Media = BoardGame | Book | Location | Music | VideoGame | Movie;
