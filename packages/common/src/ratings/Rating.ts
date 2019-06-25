import {User} from '../users/User';
import {Media} from '../media/media';

export interface Rating {
    id: string;
    rating: number;
    review?: string;
    media: Media;
    user: User;
    timestamp: string;
}
