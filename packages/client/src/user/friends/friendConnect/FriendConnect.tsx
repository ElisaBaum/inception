import React from 'react';
import Grid from '@material-ui/core/Grid';

import {withUser} from '../../withUser';
import {Button} from '../../../shared/Button/Button';
import {Section} from '../../../shared/Section/Section';
import {Avatar} from '../../../shared/Avatar/Avatar';

interface FriendConnectProps {
    friendFromCurrentInvite: any;
    onClose();
}

export const FriendConnect = withUser(({friendFromCurrentInvite, onClose}: FriendConnectProps) => (
    <Section alignItems={'center'} justify={'flex-start'} fullHeight>
        <Grid item xs={12} container justify={'center'}>
            Successfully connected with
        </Grid>
        <Grid item xs={12} container justify={'center'}>
            <Avatar size={'large'}>
                {friendFromCurrentInvite && friendFromCurrentInvite.name.substr(0, 2)}
            </Avatar>
            {friendFromCurrentInvite && friendFromCurrentInvite.name}
        </Grid>
        <Grid item xs={12}>
            <Button fullWidth color={'primary'} onClick={onClose}>
                Got it!
            </Button>
        </Grid>
    </Section>
));
