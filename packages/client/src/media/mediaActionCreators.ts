import {history} from '../core/history';
import {SET_CURRENT_MEDIA} from './mediaActions';

export const setCurrentMedia = media => ({type: SET_CURRENT_MEDIA, payload: media});
export const navigateToMedia = media => dispatch => {
    dispatch(setCurrentMedia(media));
    history.push('/media');
};
