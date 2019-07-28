import React from 'react';
import {Theme} from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import makeStyles from '@material-ui/styles/makeStyles';
import {Media} from '@baum/ic-common';

import {MediaType, mediaTypes} from '../media/types';
import {Card} from '../shared/Card/Card';
import {CardHeader} from '../shared/Card/CardHeader';
import {useDispatch} from 'react-redux';
import {navigateToMedia} from '../media/mediaActionCreators';

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

const useStyles = makeStyles((theme: Theme) => ({
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
}));

export type SearchResultCardProps = {
    media: Media;
};

export const SearchResultCard = ({media}: SearchResultCardProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {title, subtitle, icon} = mediaTypes[media.type].getSearchResultData(media);
    return (
        <ButtonBase className={classes.buttonWrapper}
                    onClick={() => dispatch(navigateToMedia(media))}>
            <Card className={classes.card}>
                <CardHeader title={title}
                            subtitle={subtitle}
                            icon={icon}/>
            </Card>
        </ButtonBase>
    );
};
