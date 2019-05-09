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

const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing.unit * 2,
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
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title={'Avengers: Endgame'} />
                        <CardContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et mi orci. Cras et sapien lobortis,
                            faucibus augue a, egestas nulla. Pellentesque vehicula placerat portt…
                        </CardContent>
                        <CardFooter>
                            <div>user</div>
                            <div>date</div>
                            <div>Comment</div>
                        </CardFooter>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    </MuiThemeProvider>
));
