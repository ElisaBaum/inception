import * as admin from 'firebase-admin';
import {getFriendInvite} from './friends/friendInvites';
import {createFactory, getFactory} from '../common/firestore';

export const collection = () => admin.firestore().collection('users');

// TODO move to common
export interface User {
    id: string;
    name: string;
}

export const createUser = createFactory(collection);
export const getUser = getFactory<User>(collection);

export const createUserByFriendInvite = async (id: string, name: string, inviteToken: string) => {
    const friendInvite = await getFriendInvite(inviteToken);
    if (!friendInvite) {
        throw new Error(`Invite Token "${inviteToken}" is invalid`);
    }
    return createUser(id, {name});
};

