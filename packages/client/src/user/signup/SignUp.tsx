import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid/Grid';

import {Button} from '../../shared/Button/Button';
import {Section} from '../../shared/Section/Section';
import {Redirect} from 'react-router';
import {withUser} from '../withUser';
import {TextField} from '../../shared/TextField/TextField';

export const SignUp = withUser(({user, signUp, location}) => {
    const [name, setName] = useState('');
    if (user) {
        return <Redirect to={location.state ? location.state.from : '/'}/>;
    }
    return (
        <Section>
            <Grid item xs={12}>
               <TextField placeholder={'Name'} value={name} onChange={e => setName(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth color="primary" onClick={() => signUp(name)}>
                    Sign Up
                </Button>
            </Grid>
        </Section>
    );
});
