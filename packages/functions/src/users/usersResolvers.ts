import {IResolvers} from 'graphql-tools';
import {authenticated} from '../common/authentication';
import {connectUsers, createUserByFriendInvite, getUser} from './userService';
import {getRatings} from '../ratings/ratingService';

export const userResolvers: IResolvers = {
    Query: {
        me: authenticated((obj, args, context, info) => context.user),
        user: authenticated((obj, {id}, context, info) => getUser(id))
    },
    Mutation: {
        createUserByFriendInvite: (obj, {name, inviteToken}, context, info) =>
            createUserByFriendInvite(context.uid, name, inviteToken),
        connectMe: authenticated((obj, {inviteToken}, context, info) =>
            connectUsers(context.user, inviteToken))
    },
    User: {
        ratings: (user, args, context, info) => getRatings([['user.id', '==', user.id]])
    }
};
