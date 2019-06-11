import {getFriendInvite, removeFriendInvite} from './friendInvites';
import {createFactory, listFactory} from '../../common/firestore';
import {getUser, collection as userCollection, User} from '../userService';

const collection = (userId) => userCollection().doc(userId).collection('friends');

export const getFriendsFn = (userId) => listFactory<User>(() => collection(userId));

export const getFriends = (userId) => getFriendsFn(userId)();

export const connectUsers = async (user, inviteToken) => {
    const friendInvite = await getFriendInvite(inviteToken);
    if (!friendInvite) {
        throw new Error(`Invite Token "${inviteToken}" is invalid`);
    }
    const friend = await getUser(friendInvite.userId);
    if (!friend) {
        throw new Error(`User with ID "${friendInvite.userId}" does not exist`);
    }
    const addFriend = createFactory(() => collection(user.id));
    await addFriend(friend.id, friend);

    const addUserAsFriend = createFactory(() => collection(friend.id));
    await addUserAsFriend(user.id, user);

    await removeFriendInvite(inviteToken);

    return friend;
};
