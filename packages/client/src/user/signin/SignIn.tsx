import * as React from 'react';
import Grid from '@material-ui/core/Grid/Grid';

import {Button} from '../../shared/Button/Button';
import {Section} from '../../shared/Section/Section';
import Google from './icons/Google.svg';
import Facebook from './icons/Facebook.svg';
import Github from './icons/Github.svg';
import Twitter from './icons/Twitter.svg';
import {withUser} from '../withUser';
import {Redirect} from '../../core/Redirect/Redirect';
import {AuthStatus} from '../userReducer';
import {AuthProvider} from '../auth/authService';

interface SignInProps {
    user: any;
    authStatus: AuthStatus;
    location: { state?: { from: string } };
    usedAuthProvider?: AuthProvider;
    signIn(provider: AuthProvider);
}

const authProviders = [
    {provider: 'google' as 'google', text: 'Sign in with Google', icon: (<Google/>)},
    {provider: 'facebook' as 'facebook', text: 'Sign in with Facebook', icon: (<Facebook/>)},
    {provider: 'twitter' as 'twitter', text: 'Sign in with Twitter', icon: (<Twitter/>)},
    {provider: 'github' as 'github', text: 'Sign in with GitHub', icon: (<Github/>)},
];

export const SignIn = withUser(({user, usedAuthProvider, authStatus, signIn, location}: SignInProps) => {
    if (user) {
        return <Redirect to={location.state ? location.state.from : '/'}/>;
    }
    const isLoading = provider => authStatus === 'loading' && usedAuthProvider === provider;
    return (
        <Section>
            {
                authProviders.map(({provider, icon, text}) => (
                    <Grid item xs={12} key={provider}>
                        <Button fullWidth color="secondary"
                                iconLeft={icon}
                                disabled={isLoading(provider)}
                                loading={isLoading(provider)}
                                onClick={() => signIn(provider)}>
                            {text}
                        </Button>
                    </Grid>
                ))
            }
        </Section>
    );
});
