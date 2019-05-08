import * as React from 'react';
import {defaultColor, defaultTheme} from './shared/themes/defaultTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import {Grid, StyleRulesCallback} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

const styles: StyleRulesCallback = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2
    },
    test: {
        color: 'red'
    }
});

export const App = ({classes}) => (
    <MuiThemeProvider theme={defaultTheme}>
        <Grid container spacing={8} className={classes.root}>
            <Grid container spacing={8}>
                Avengers: Endgame
                <Grid item xs={12}>
                    <Typography component={'h1'}>Headline</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        placeholder="Search"
                        margin="normal"
                        InputLabelProps={{
                            disableAnimation: true
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search fontSize={'small'} nativeColor={defaultColor}/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        size={'large'}
                        color={'secondary'}
                    >
                        Test
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </MuiThemeProvider>
);

export default withStyles(styles)(App);
