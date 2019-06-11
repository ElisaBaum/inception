import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {withUser} from '../../withUser';
import {Button} from '../../../shared/Button/Button';
import {Section} from '../../../shared/Section/Section';
import {UserAvatar} from '../../userAvatar/UserAvatar';
import {Badge} from '../../../shared/Badge/Badge';
import {WhiteIcon} from '../../../shared/Icon/Icon';

interface FriendConnectProps {
    friendFromCurrentInvite: any;
    onClose();
}

export const FriendConnect = withUser(({friendFromCurrentInvite, onClose}: FriendConnectProps) => (
    <Section fullHeight
             direction={'column'}
             justify={'space-between'}>
        <Grid item>
            <Typography variant={'body1'}
                        align={'center'}>
                Successfully connected with
            </Typography>
        </Grid>
        <Grid item
              container
              direction={'column'}
              alignItems={'center'}>
            <Grid item>
                <Badge badgeContent={(<WhiteIcon fontSize={'inherit'}>check</WhiteIcon>)}
                       forSize={'large'}>
                    <UserAvatar size={'large'}
                                user={friendFromCurrentInvite}/>
                </Badge>
            </Grid>
            <Grid item>
                <p>{friendFromCurrentInvite.name}</p>
            </Grid>
        </Grid>
        <Grid item>
            <Button fullWidth
                    color={'primary'}
                    onClick={onClose}>
                Got it!
            </Button>
        </Grid>
    </Section>
));
