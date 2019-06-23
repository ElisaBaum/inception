import {MediaType} from '../index';
import {BoardGame} from '../../../../../common/media/BoardGame';

export default {
    getRatingCardData: (boardGame: BoardGame) => ({
        title: boardGame.name,
        icon: 'dashboard'
    }),
} as MediaType;
