import {MediaType} from '../index';
import {VideoGame} from '../../../../../common/media/VideoGame';

export default {
    getRatingCardData: (videoGame: VideoGame) => ({
        title: videoGame.name,
        icon: 'gamepad'
    }),
} as MediaType;
