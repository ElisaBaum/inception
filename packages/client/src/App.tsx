import React, {useState} from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import {defaultTheme} from './shared/themes/defaultTheme';
import {store} from './core/store';
import {withUser} from './user/withUser';
import {AuthStatus} from './user/userReducer';
import {Routes} from './Routes';
import {initUser} from './user/userActionCreators';
import {Modals} from './core/modals/Modals';
import {friendConnect} from './user/friends/friendConnect/friendConnectModal';
import {SplashScreen} from './core/splashscreen/SplashScreen';
import {Navigation} from './Navigation';
import {Menu} from './Menu';

store.dispatch(initUser());

interface AppProps {
    authStatus: AuthStatus;
}

export const App = withUser(({authStatus}: AppProps) => {
    const [isMenuOpen, setMenuOpen] = useState();
    return (
        <Router>
            <Menu isOpen={isMenuOpen}
                  onStateChange={setMenuOpen}
                  pageWrapId={'test'}/>
            <div id={'test'}>
                <Navigation isMenuOpen={isMenuOpen}
                            onMenuChange={setMenuOpen}/>
                <Routes/>
            </div>
            <Modals componentMap={{friendConnect}}/>
            {authStatus === 'pending' && (<SplashScreen/>)}
        </Router>
    );
});


export const AppWithProviders = () => (
    <StoreProvider store={store}>
        <MuiThemeProvider theme={defaultTheme}>
            <App/>
        </MuiThemeProvider>
    </StoreProvider>
);
