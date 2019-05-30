import * as admin from 'firebase-admin';
import {getFactory} from '../../common/firestore';

const firestore = admin.firestore();
const collection = firestore.collection('connectTokens');

interface FriendInvite {
    token: string;
    userId: string;
    timestamp: any;
}

export const getFriendInvite = getFactory<FriendInvite>(collection);
export const createFriendInvite = async (userId: string) => {
    const token = 'test'; // TODO generate token
    const friendInvite = {userId, token};
    await collection.doc(token).create(friendInvite);
    return friendInvite;
};

