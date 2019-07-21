import React from 'react';
import {Media} from '@baum/ic-common';
import ButtonBase from '@material-ui/core/ButtonBase';

import {MediaType, mediaTypes} from '../media/types';
import {Card} from '../shared/Card/Card';
import {CardHeader} from '../shared/Card/CardHeader';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import {Theme} from '@material-ui/core';
import {Link} from 'react-router-dom';

export interface SearchResultCardData {
    title: string;
    subtitle?: string;
    icon: string;
}

declare module '../media/types' {
    interface MediaType {
        getSearchResultData(media: any): SearchResultCardData;
    }
}

const style = (theme: Theme) => ({
    buttonWrapper: {
        ...(theme.overrides as any).MuiPaper.elevation1,
        width: '100%',
        textAlign: 'left' as 'left',
        borderRadius: '.7rem',
        overflow: 'hidden',
    },
    card: {
        width: '100%',
    }
});

export type SearchResultCardProps = {
    media: Media;
} & WithStyles<typeof style>;

export const SearchResultCard = withStyles(style)(({classes, media}: SearchResultCardProps) => {
    const {title, subtitle, icon} = mediaTypes[media.type].getSearchResultData(media);
    return (
        <ButtonBase className={classes.buttonWrapper}
                    component={WrappedLink}
                    to={{pathname: '/media', state: {media}}}>
            <Card className={classes.card}>
                <CardHeader title={title}
                            subtitle={subtitle}
                            icon={icon}/>
            </Card>
        </ButtonBase>
    );
});

const WrappedLink = React.forwardRef((props, ref: any) => (
    <Link innerRef={ref} {...props} />
));
