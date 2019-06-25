import {MediaType} from '../index';
import {BoardGame} from '../../../../../common/src/media/types/boardGame/BoardGame';

export default {
    getRatingCardData: (boardGame: BoardGame) => ({
        title: boardGame.name,
        icon: 'dashboard'
    }),
} as MediaType;
