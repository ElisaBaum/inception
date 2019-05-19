import * as React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {Grid} from '@material-ui/core';

import {defaultTheme} from './shared/themes/defaultTheme';
import {Button} from './shared/Button/Button';
import {TextField} from './shared/TextField/TextField';
import {CardFooter} from './shared/Card/CardFooter';
import {Card} from './shared/Card/Card';
import {CardHeader} from './shared/Card/CardHeader';
import {CardContent} from './shared/Card/CardContent';
import {Avatar} from './shared/Avatar/Avatar';
import {Badge} from './shared/Badge/Badge';
import {Section} from './shared/Section/Section';
import {Nav} from './shared/Nav/Nav';

import elisaAvatar from './elisa_avatar.JPG';
import robinAvatar from './robin_avatar.png';

export const App = () => (
    <MuiThemeProvider theme={defaultTheme}>
        <Nav title={'Welcome'} subTitle={'Elisa'}/>
        <Section>
            <Grid item xs={12}>
                <TextField icon="search" placeholder="Search"/>
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth color={'primary'}>
                    Save
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth color={'secondary'}>
                    Cancel
                </Button>
            </Grid>
        </Section>
        <Section title={'Ratings'}>
            <Grid item xs={12} container spacing={16}>
                <Grid item>
                    <Badge badgeContent={'7'} forSize={'large'}>
                        <Avatar size={'large'} alt={'Elisa'} src={elisaAvatar}/>
                    </Badge>
                </Grid>
                <Grid item>
                    <Badge badgeContent={'5'} forSize={'large'}>
                        <Avatar size={'large'} alt={'Robin'} src={robinAvatar}/>
                    </Badge>
                </Grid>
            </Grid>
        </Section>
        <Section title={'Reviews'}>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title={'Avengers: Endgame'} subtitle={'test'} icon={'movie_creation'} action={<Avatar>7</Avatar>}/>
                    <CardContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et mi orci. Cras et sapien lobortis,
                        faucibus augue a, egestas nulla. Pellentesque vehicula placerat portt…
                    </CardContent>
                    <CardFooter>
                        <Badge badgeContent={'9'}>
                            <Avatar alt={'Robin'} src={robinAvatar}/>
                        </Badge>
                        <div>user</div>
                        <div>date</div>
                        <div>Comment</div>
                    </CardFooter>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title={'Captain Marvel'}/>
                    <CardContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et mi orci. Cras et sapien lobortis,
                        faucibus augue a, egestas nulla. Pellentesque vehicula placerat portt…
                    </CardContent>
                    <CardFooter>
                        <Badge badgeContent={'7'}>
                            <Avatar alt={'Elisa'} src={elisaAvatar}/>
                        </Badge>
                        <div>user</div>
                        <div>date</div>
                        <div>Comment</div>
                    </CardFooter>
                </Card>
            </Grid>
        </Section>
    </MuiThemeProvider>
);
