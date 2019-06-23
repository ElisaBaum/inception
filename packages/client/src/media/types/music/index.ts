import {MediaType} from '../index';
import {Music} from '../../../../../common/media/Music';

export default {
    getRatingCardData: (music: Music) => ({
        title: music.name,
        subtitle: music.artist,
        icon: 'music_note'
    }),
} as MediaType;
