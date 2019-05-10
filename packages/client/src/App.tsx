import * as React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {Grid, Theme, WithStyles} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

import {defaultTheme} from './shared/themes/defaultTheme';
import {Button} from './shared/Button/Button';
import {TextField} from './shared/TextField/TextField';
import {CardFooter} from './shared/Card/CardFooter';
import {Card} from './shared/Card/Card';
import {CardHeader} from './shared/Card/CardHeader';
import {CardContent} from './shared/Card/CardContent';
import {H1} from './shared/Headline/H1';
import {Avatar} from './shared/Avatar/Avatar';

import elisaAvatar from './elisa_avatar.JPG';
import robinAvatar from './robin_avatar.png';
import {Badge} from './shared/Badge/Badge';
import {H2} from './shared/Headline/H2';
import {Section} from './shared/Section/Section';

const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
    },
});

interface AppProps extends WithStyles<typeof styles> {
}

export const App = withStyles(styles)((props: AppProps) => (
    <MuiThemeProvider theme={defaultTheme}>
        <Grid container spacing={8} className={props.classes.root}>
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <H1>Login</H1>
                </Grid>
                <Section>
                    <Grid item xs={12}>
                        <TextField icon="search" placeholder="Search"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth>
                            Save
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth color={'secondary'}>
                            Cancel
                        </Button>
                    </Grid>
                </Section>
                <Section>
                    <Grid item xs={12}>
                        <H2>Ratings</H2>
                    </Grid>
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
                <Section>
                    <Grid item xs={12}>
                        <H2>Reviews</H2>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title={'Avengers: Endgame'}/>
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
            </Grid>
        </Grid>
    </MuiThemeProvider>
));
