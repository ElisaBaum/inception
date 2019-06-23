import ApolloClient from 'apollo-boost';
import {getTokenId} from '../user/userSelectors';
import {store} from './store';

export const client = new ApolloClient({
    uri: 'https://us-central1-inception-1b143.cloudfunctions.net/api/graphql',
    request: operation => {
        const tokenId = getTokenId(store.getState());
        if (tokenId) {
            operation.setContext({
                headers: {
                    authorization: `Bearer ${tokenId}`,
                }
            });
        }
    }
});
