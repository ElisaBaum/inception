import {Media} from '../../../common/media/Media';
import {Movie} from '../../../common/movies';
import {Music} from '../../../common/media/Music';
import {Book} from '../../../common/media/Book';
import {BoardGame} from '../../../common/media/BoardGame';
import {VideoGame} from '../../../common/media/VideoGame';
import {Location} from '../../../common/media/Location';

export interface MediaMetaInfo {
    title: string;
    subtitle?: string;
    icon: string;
}

export const getMediaMetaInfo = (media: Media): MediaMetaInfo => {
    switch (media.type) {
        case 'Movie': {
            const movie = media as Movie;
            return {
                title: movie.title,
                subtitle: movie.releaseDate,
                icon: 'movie_creation'
            };
        }
        case 'Music': {
            const music = media as Music;
            return {
                title: music.name,
                subtitle: music.artist,
                icon: 'music_note'
            };
        }
        case 'Book': {
            const book = media as Book;
            return {
                title: book.title,
                subtitle: book.author,
                icon: 'book'
            };
        }
        case 'BoardGame':
            const boardGame = media as BoardGame;
            return {
                title: boardGame.name,
                icon: 'dashboard'
            };
        case 'VideoGame':
            const videoGame = media as VideoGame;
            return {
                title: videoGame.name,
                icon: 'gamepad'
            };
        case 'Location':
            const location = media as Location;
            return {
                title: location.name,
                icon: 'location_on'
            };
    }
};
