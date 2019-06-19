import React from 'react';

import {Rating} from '../../../common/ratings/Rating';
import {Card} from '../shared/Card/Card';
import {CardHeader} from '../shared/Card/CardHeader';
import {CardContent} from '../shared/Card/CardContent';
import {CardFooter} from '../shared/Card/CardFooter';
import {Badge} from '../shared/Badge/Badge';
import {Container} from '../shared/Container/Container';
import {UserAvatar} from '../user/userAvatar/UserAvatar';
import {getMediaMetaInfo} from '../media/mediaMetaInfo';

export interface RatingCardProps {
    rating: Rating;
}

const ReviewRating = ({rating}: RatingCardProps) => {
    const mediaMetaInfo = getMediaMetaInfo(rating.media);
    return (
        <Card>
            <CardHeader title={mediaMetaInfo.title}
                        subtitle={mediaMetaInfo.subtitle}
                        icon={mediaMetaInfo.icon}/>
            <CardContent>
                {rating.review}
            </CardContent>
            <CardFooter>
                <UserRatingAvatar rating={rating}/>
            </CardFooter>
        </Card>
    );
};

const Rating = ({rating}: RatingCardProps) => {
    const mediaMetaInfo = getMediaMetaInfo(rating.media);
    return (
        <Card>
            <CardHeader title={mediaMetaInfo.title}
                        subtitle={mediaMetaInfo.subtitle}
                        icon={mediaMetaInfo.icon}
                        action={<UserRatingAvatar rating={rating}/>}/>
        </Card>
    );
};

const UserRatingAvatar = ({rating}: RatingCardProps) => (
    <Container fullWidth rightToLeft>
        <Badge badgeContent={rating.rating}>
            <UserAvatar user={rating.user}/>
        </Badge>
    </Container>
);

export const RatingCard = ({rating}: RatingCardProps) => {
    if (rating.review) {
        return <ReviewRating rating={rating}/>;
    } else {
        return <Rating rating={rating} />;
    }
};
