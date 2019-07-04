import BoardGame from './boardGame';
import Book from './book';
import Location from './location';
import Movie from './movie';
import Music from './music';
import VideoGame from './videoGame';

export class MediaType {
    // Required members can be added in their modules
}

export const mediaTypes: { [type: string]: MediaType } = {
    // BoardGame,
    // Book,
    // Location,
    Movie,
    // Music,
    // VideoGame,
};

export const mediaTypeList = Object.entries(mediaTypes).map(([key, value]) => ({
    type: key,
    ...value,
}));
