import React from 'react';

import {withUser} from '../../withUser';

interface FriendConnectProps {
    friendFromCurrentInvite: any;
}

export const FriendConnect = withUser(({friendFromCurrentInvite}: FriendConnectProps) => (
    <div>
        Successfully connected with
        {friendFromCurrentInvite && friendFromCurrentInvite.name}
    </div>
));
