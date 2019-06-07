import * as React from 'react';
import {withUser} from '../withUser';

interface StreamProps {
    signOut();
}

export const Stream = withUser(({signOut}: StreamProps) => (
    <div>
        Stream
        <button onClick={signOut}>signout</button>
    </div>
));
