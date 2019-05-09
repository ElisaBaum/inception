import * as React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Typography from '@material-ui/core/Typography';
import {Grid, Theme, WithStyles} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiIcon from '@material-ui/core/Icon';

import {defaultColor, defaultTheme} from './shared/themes/defaultTheme';
import {Button} from './shared/Button/Button';
import {TextField} from './shared/TextField/TextField';

const styles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
    },
    test: {
        color: 'red'
    }
});

const Icon = withStyles({
    root: {
        color: defaultColor
    }
})(MuiIcon);

interface AppProps extends WithStyles<typeof styles> {
}

export const App = withStyles(styles)((props: AppProps) => (
    <MuiThemeProvider theme={defaultTheme}>
        <Grid container spacing={8} className={props.classes.root}>
            <Grid container spacing={8}>
                Avengers: Endgame
                <Grid item xs={12}>
                    <Typography component={'h1'}>Headline</Typography>
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
            </Grid>
        </Grid>
    </MuiThemeProvider>
));
