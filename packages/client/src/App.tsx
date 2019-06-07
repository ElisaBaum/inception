import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import {defaultTheme} from './shared/themes/defaultTheme';
import {store} from './core/store';
import {withUser} from './user/withUser';
import {AuthStatus} from './user/userReducer';
import {AppRoutes} from './AppRoutes';
import {init} from './user/userActionsCreators';

interface AppProps {
    authStatus: AuthStatus;
}

store.dispatch(init());

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
