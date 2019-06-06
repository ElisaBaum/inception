import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import {defaultTheme} from './shared/themes/defaultTheme';
import {store} from './store';
import {withUser} from './user/withUser';
import {AuthStatus} from './user/userReducer';
import {AppRoutes} from './AppRoutes';

interface AppProps {
    authStatus: AuthStatus;
}

export const App = withUser(({authStatus}: AppProps) => {
    if (authStatus === 'pending') {
        return (<div>Splash</div>);
    }
    return (
        <AppRoutes/>
    );
});

export const AppWithProviders = () => (
    <StoreProvider store={store}>
        <MuiThemeProvider theme={defaultTheme}>
            <App/>
        </MuiThemeProvider>
    </StoreProvider>
);
