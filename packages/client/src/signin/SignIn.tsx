import * as React from 'react';
import Grid from '@material-ui/core/Grid/Grid';

import {Button} from '../shared/Button/Button';
import {Section} from '../shared/Section/Section';
import Google from './icons/Google.svg';
import Facebook from './icons/Facebook.svg';
import Github from './icons/Github.svg';
import Twitter from './icons/Twitter.svg';
import Microsoft from './icons/Microsoft.svg';

export const SignIn = () => (
    <Section>
        <Grid item xs={12}>
            <Button fullWidth color="secondary" iconLeft={<Google/>}>
                Sign in with Google
            </Button>
        </Grid>
        <Grid item xs={12}>
            <Button fullWidth color="secondary" iconLeft={<Facebook/>}>
                Sign in with Facebook
            </Button>
        </Grid>
        <Grid item xs={12}>
            <Button fullWidth color="secondary" iconLeft={<Twitter/>}>
                Sign in with Twitter
            </Button>
        </Grid>
        <Grid item xs={12}>
            <Button fullWidth color="secondary" iconLeft={<Github/>}>
                Sign in with GitHub
            </Button>
        </Grid>
        <Grid item xs={12}>
            <Button fullWidth color="secondary" iconLeft={<Microsoft/>}>
                Sign in with Microsoft
            </Button>
        </Grid>
    </Section>
);
