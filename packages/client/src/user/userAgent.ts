import {client} from '../shared/apollo';
import gql from 'graphql-tag';

export const queryMe = () => client.query<{me: {id: string; name: string}}>({
    query: gql`
        query {
            me {
                id
                name
            }
        }
    `
});
