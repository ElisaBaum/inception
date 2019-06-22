import * as React from 'react';
import {withUser} from '../withUser';
import {Card} from '../../shared/Card/Card';
import {Section} from '../../shared/Section/Section';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';

interface StreamProps {
    signOut();
}

export const Stream = withUser(({signOut}: StreamProps) => (
    <Section>
        Stream
        <button onClick={signOut}>signout</button>
        <Grid item xs={12}>
            <Card>
                Test
                <Link to={'/friends'}>{'friends'}</Link>
                <Link to={'/settings'}>{'settings'}</Link>
            </Card>
        </Grid>
    </Section>
));
