import * as admin from 'firebase-admin';
import nanoid from 'nanoid';
import {getFactory} from '../../common/firestore';

const collection = () => admin.firestore().collection('friendInvites');

interface FriendInvite {
    token: string;
    userId: string;
    timestamp: any;
}

export const getFriendInvite = getFactory<FriendInvite>(collection);
export const removeFriendInvite = token => collection().doc(token).delete();
export const createFriendInvite = async (userId: string) => {
    const token = nanoid(68);
    const friendInvite = {userId, token, timestamp: admin.firestore.Timestamp.now()};
    await collection().doc(token).create(friendInvite);
    return friendInvite;
};

