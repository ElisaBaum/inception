import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloLink} from 'apollo-link';
import {setContext} from 'apollo-link-context';
import {getTokenId} from '../user/userSelectors';
import {store} from './store';

export const client = new ApolloClient({
    link: ApolloLink.from([
        // onError(({graphQLErrors, networkError}) => {
        //     if (graphQLErrors)
        //         graphQLErrors.map(({message, locations, path}) =>
        //             console.log(
        //                 `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        //             ),
        //         );
        //     if (networkError) console.log(`[Network error]: ${networkError}`);
        // }),
        setContext(() => {
            const tokenId = getTokenId(store.getState());
            if (tokenId) {
                return {
                    headers: {
                        authorization: `Bearer ${tokenId}`,
                    }
                };
            }
            return {};
        }),
        new HttpLink({
            uri: 'https://us-central1-inception-1b143.cloudfunctions.net/api/graphql',
        }),
    ]),
    cache: new InMemoryCache()
});
