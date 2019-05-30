import {getUser} from '../users/userService';

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
