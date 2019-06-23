import {MediaType} from '../index';
import {Location} from '../../../../../common/media/Location';

export default {
    getRatingCardData: (location: Location) => ({
        title: location.name,
        icon: 'location_on'
    }),
} as MediaType;
