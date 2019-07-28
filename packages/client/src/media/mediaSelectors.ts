import {State} from '../core/store';
import {createSelector} from 'reselect';
import {MediaState} from './mediaReducer';

export const getMediaState = (state: State): MediaState => state.media;

export const getCurrentMedia = createSelector(
    getMediaState,
    state => state.currentMedia,
);
