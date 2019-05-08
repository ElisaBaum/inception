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
import {Card} from "./shared/Card/Card";
import {CardHeader} from "./shared/Card/CardHeader";
import {CardContent} from "./shared/Card/CardContent";
import {CardFooter} from "./shared/Card/CardFooter";

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
);

export default withStyles(styles)(App);
