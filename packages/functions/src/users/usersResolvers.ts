import {IResolvers} from 'graphql-tools';
import {authenticated} from '../common/authentication';
import {createUserByFriendInvite, getUser} from './userService';
import {getRatings} from '../ratings/ratingService';
import {connectUsers} from './friends/friends';
import {getStreamFn} from './stream/stream';
import {createFriendInvite} from './friends/friendInvites';

export const userResolvers: IResolvers = {
    Query: {
        me: authenticated((obj, args, context, info) => context.user),
        user: authenticated((obj, {id}, context, info) => getUser(id)),
        stream: authenticated((obj, args, context, info) =>
            getStreamFn(context.user.id)(undefined, {
                limit: 15,
                offset: 0,
                orderBy: ['timestamp', 'desc'],
                ...args
            })),
    },
    Mutation: {
        createUserByFriendInvite: (obj, {name, inviteToken}, context, info) =>
            createUserByFriendInvite(context.uid, name, inviteToken),
        createFriendInvite: authenticated((obj, {inviteToken}, context, info) =>
            createFriendInvite(context.user.id)),
        connectMe: authenticated((obj, {inviteToken}, context, info) =>
            connectUsers(context.user, inviteToken)),
    },
    User: {
        ratings: (user, args, context, info) => getRatings([['user.id', '==', user.id]])
    },
    FriendInvite: {
        timestamp: (friendInvite, args, context, info) => friendInvite.timestamp.toDate().toISOString(),
    }
};
