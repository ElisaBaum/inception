import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid/Grid';

import {Button} from '../../shared/Button/Button';
import {Section} from '../../shared/Section/Section';
import {withUser} from '../withUser';
import {TextField} from '../../shared/TextField/TextField';
import {Redirect} from '../../core/Redirect/Redirect';

interface SignUpProps {
    user: any;
    location: { state?: { from: string } };
    signUp(name: string);
}

export const SignUp = withUser(({user, signUp, location}: SignUpProps) => {
    const [name, setName] = useState('');
    if (user) {
        return <Redirect to={location.state ? location.state.from : '/'}/>;
    }
    return (
        <Section>
            <Grid item xs={12}>
                <TextField placeholder={'Name'}
                           value={name}
                           onChange={e => setName(e.target.value)}/>
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth
                        color="primary"
                        onClick={() => signUp(name)}>
                    Sign Up
                </Button>
            </Grid>
        </Section>
    );
});
