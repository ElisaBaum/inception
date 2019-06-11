import {client} from '../core/apollo';
import gql from 'graphql-tag';

export const me = () => client.query<{me: {id: string; name: string}}>({
    query: gql`
        query {
            me {
                id
                name
            }
        }
    `
});

export const createUserByFriendInvite = ({name, inviteToken}) => client.mutate<{createUserByFriendInvite: {id: string; name: string}}>({
    mutation: gql`
        mutation ($name: String!, $inviteToken: String!) {
            createUserByFriendInvite(name: $name, inviteToken: $inviteToken) {
                id
                name
            }
        }
    `,
    variables: {name, inviteToken},
});


export const connectMe = ({inviteToken}) => client.mutate<{connectMe: {id: string; name: string}}>({
    mutation: gql`
        mutation ($inviteToken: String!) {
            connectMe(inviteToken: $inviteToken) {
                id
                name
            }
        }
    `,
    variables: {inviteToken},
});
