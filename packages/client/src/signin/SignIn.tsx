import * as React from 'react';
import Grid from '@material-ui/core/Grid/Grid';

import {Button} from '../shared/Button/Button';
import {Section} from '../shared/Section/Section';
import GoogleLogo from './icons/Google.svg';

export const SignIn = () => (
    <Section>
        <Grid item xs={12}>
            <Button fullWidth color="secondary" iconLeft={<GoogleLogo/>}>
                Sign in with Google
            </Button>
        </Grid>
    </Section>
);
