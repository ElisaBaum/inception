import React from 'react';

import {withUser} from '../../user/withUser';
import {Button} from '../../shared/Button/Button';
import {UserAvatar} from '../../user/userAvatar/UserAvatar';
import {Badge} from '../../shared/Badge/Badge';
import {WhiteIcon} from '../../shared/Icon/Icon';
import {ModalTitle} from '../../shared/modal/ModalTitle';
import {ModalContent} from '../../shared/modal/ModalContent';
import {ModalActions} from '../../shared/modal/ModalActions';

interface FriendConnectProps {
    friendFromCurrentInvite: any;
    onClose();
}

export const FriendConnect = withUser(({friendFromCurrentInvite, onClose}: FriendConnectProps) => (
    <>
        <ModalTitle title={'Successfully connected with'}/>
        <ModalContent>
                <Badge badgeContent={(<WhiteIcon fontSize={'inherit'}>check</WhiteIcon>)}
                       forSize={'large'}>
                    <UserAvatar size={'large'}
                                user={friendFromCurrentInvite}/>
                </Badge>
                <p>{friendFromCurrentInvite.name}</p>
        </ModalContent>
        <ModalActions>
            <Button fullWidth
                    color={'primary'}
                    onClick={onClose}>
                Got it!
            </Button>
        </ModalActions>
    </>
));
