import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const getPathWithoutParams = location =>
    location && location.pathname.split('?')[0];
