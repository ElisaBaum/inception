import {MediaType} from '../index';
import {VideoGame} from '../../../../../common/src/media/types/videoGame/VideoGame';

export default {
    getRatingCardData: (videoGame: VideoGame) => ({
        title: videoGame.name,
        icon: 'gamepad'
    }),
} as MediaType;
