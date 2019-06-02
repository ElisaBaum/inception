import {getUser} from '../users/userService';
import * as admin from 'firebase-admin';

export const authenticated = next => async (root, args, context, info) => {
    if (context.uid) {
        const user = await getUser(context.uid);
        if (user) {
            context.user = user;
            return next(root, args, context, info);
        }
    }
    throw new Error(`Unauthenticated`);
};

export const addUidToContext = async ({req}) => {
    try {
        const authHeader = req.get('authorization');
        if (authHeader) {
            const [_, tokenId] = authHeader.split('Bearer ');
            const {uid} = await admin.auth().verifyIdToken(tokenId);
            return {uid};
        }
    } catch (e) {
        console.log(e);
    }
    return {}; // OR does throw verifyIdToken anyway??
};
