import React, {useState} from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {Router} from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import {defaultTheme} from './shared/themes/defaultTheme';
import {history} from './core/history';
import {store} from './core/store';
import {withUser} from './user/withUser';
import {AuthStatus} from './user/userReducer';
import {Routes} from './Routes';
import {initUser} from './user/userActionCreators';
import {initSearch} from './search/searchActionCreators';
import {Modals} from './core/modals/Modals';
import {friendConnect} from './friends/friendConnect/friendConnectModal';
import {SplashScreen} from './core/splashscreen/SplashScreen';
import {Navigation, NavigationProvider} from './Navigation';
import {Menu} from './Menu';

store.dispatch(initUser());
store.dispatch(initSearch());

interface AppProps {
    authStatus: AuthStatus;
}

export const App = withUser(({authStatus}: AppProps) => {
    const [isMenuOpen, setMenuOpen] = useState();
    return (
        <Router history={history}>
            <Menu isOpen={isMenuOpen}
                  onStateChange={setMenuOpen}
                  pageWrapId={'mainContent'}/>
            <div id={'mainContent'}>
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
            <NavigationProvider>
                <App/>
            </NavigationProvider>
        </MuiThemeProvider>
    </StoreProvider>
);
