import * as admin from 'firebase-admin';
import {createFriendInvite, getFriendInvite} from './friends/friendInvites';
import {createFactory, getFactory} from '../common/firestore';

const collection = () => admin.firestore().collection('users');

// TODO move to common
interface User {
    id: string;
    name: string;
}

export const createUser = createFactory(collection);
export const getUser = getFactory<User>(collection);

export const createUserByFriendInvite = async (id: string, name: string, inviteToken: string) => {
    await createFriendInvite('bla');
    const friendInvite = await getFriendInvite(inviteToken);
    if (!friendInvite) {
        throw new Error(`Invite Token "${inviteToken}" is invalid`);
    }
    return createUser(id, {name});
};

export const connectUsers = async (user, inviteToken) => {
    const friendInvite = await getFriendInvite(inviteToken);
    if (!friendInvite) {
        throw new Error(`Invite Token "${inviteToken}" is invalid`);
    }
    const friend = await getUser(friendInvite.userId);
    if (!friend) {
        throw new Error(`User with ID "${friendInvite.userId}" does not exist`);
    }
    const addFriend = createFactory(() => collection().doc(user.id).collection('friends'));
    await addFriend(friend.id, friend);

    const addUserAsFriend = createFactory(() => collection().doc(friend.id).collection('friends'));
    await addUserAsFriend(user.id, user);
};
