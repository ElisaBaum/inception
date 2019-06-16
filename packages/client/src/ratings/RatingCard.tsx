import React from 'react';

import {Rating} from '../../../common/ratings/Rating';
import {Card} from '../shared/Card/Card';
import {CardHeader} from '../shared/Card/CardHeader';
import {CardContent} from '../shared/Card/CardContent';
import {Movie} from '../../../common/movies';
import {Badge} from '../shared/Badge/Badge';
import {UserAvatar} from '../user/userAvatar/UserAvatar';
import {CardFooter} from '../shared/Card/CardFooter';
import {Music} from '../../../common/media/Music';
import {Book} from '../../../common/media/Book';
import {BoardGame} from '../../../common/media/BoardGame';
import {VideoGame} from '../../../common/media/VideoGame';
import {Location} from '../../../common/media/Location';

export interface RatingCardProps {
    rating: Rating;
}

const ReviewRating = ({rating}: RatingCardProps) => (
    <Card>
        <CardHeader title={title(rating)}
                    subtitle={subtitle(rating)}
                    icon={icon(rating)}
                    />
        <CardContent>
            {rating.review}
        </CardContent>
        <CardFooter>
            <UserRatingAvatar rating={rating}/>
        </CardFooter>
    </Card>
);

const Rating = ({rating}: RatingCardProps) => (
    <Card>
        <CardHeader title={title(rating)}
                    subtitle={subtitle(rating)}
                    icon={icon(rating)}
                    action={<UserRatingAvatar rating={rating}/>}/>
    </Card>
);

const UserRatingAvatar = ({rating}: RatingCardProps) => (
    <Badge badgeContent={rating.rating}>
        <UserAvatar user={rating.user}/>
    </Badge>
);

const subtitle = (rating: Rating) => {
    switch (rating.media.type) {
        case 'Movie': return (rating.media as Movie).releaseDate;
        case 'Music': return (rating.media as Music).artist;
        case 'Book': return (rating.media as Book).author;
        default: return undefined;
    }
};

const title = (rating: Rating) => {
  switch (rating.media.type) {
      case 'Movie': return (rating.media as Movie).title;
      case 'Music': return (rating.media as Music).name;
      case 'Book': return (rating.media as Book).title;
      case 'BoardGame': return (rating.media as BoardGame).name;
      case 'VideoGame': return (rating.media as VideoGame).name;
      case 'Location': return (rating.media as Location).name;
  }
};

const icon = (rating: Rating) => {
    switch (rating.media.type) {
        case 'Movie': return 'movie_creation';
        case 'Music': return 'music_note';
        case 'Book': return 'book';
        case 'BoardGame': return 'dashboard';
        case 'VideoGame': return 'gamepad';
        case 'Location': return 'location_on';
        default: return undefined;
    }
};

export const RatingCard = ({rating}: RatingCardProps) => {
    if (rating.review) {
        return <ReviewRating rating={rating}/>;
    } else {
        return <Rating rating={rating} />;
    }
};
