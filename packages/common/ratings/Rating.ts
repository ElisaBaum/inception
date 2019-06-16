import {User} from '../users/User';
import {Media} from '../media/Media';

export interface Rating {
    id: string;
    rating: number;
    // type: string;
    review?: string;
    media: Media;
    user: User;
    timestamp: string;
}
