import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import {defaultTheme} from './shared/themes/defaultTheme';
import {store} from './core/store';
import {withUser} from './user/withUser';
import {AuthStatus} from './user/userReducer';
import {AppRoutes} from './AppRoutes';
import {initUser} from './user/userActionCreators';
import {Modals} from './core/modals/Modals';
import {friendConnect} from './user/friends/friendConnect/friendConnectModal';
import {SplashScreen} from './core/splashscreen/SplashScreen';

store.dispatch(initUser());

interface AppProps {
    authStatus: AuthStatus;
}

export const App = withUser(({authStatus}: AppProps) => {
    return (
        <>
            <AppRoutes/>
            <Modals componentMap={{friendConnect}} />
            {authStatus === 'pending' && (<SplashScreen />)}
        </>
    );
});

export const AppWithProviders = () => (
    <StoreProvider store={store}>
        <MuiThemeProvider theme={defaultTheme}>
            <App/>
        </MuiThemeProvider>
    </StoreProvider>
);
