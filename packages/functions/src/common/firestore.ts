import {CollectionReference, FieldPath, OrderByDirection, WhereFilterOp} from '@google-cloud/firestore';

export const createFactory = (collection: CollectionReference) => async (id: string, data: any) => {
    const doc = {id, ...data};
    await collection.doc(id).create(doc);
    return doc;
};

export const getFactory = <T>(collection: CollectionReference) => async (id: string): Promise<T | undefined> => {
    const docRef = await collection.doc(id).get();
    if (docRef.exists) {
        return {id, ...docRef.data()} as unknown as T;
    }
};

export interface ListQuery {
    limit?: number;
    offset?: number;
    orderBy?: [string | FieldPath, OrderByDirection?];
}

export type Where = [string | FieldPath, WhereFilterOp, any];

export const listFactory = <T>(collection: CollectionReference) => async (
    wheres: Where[] = [],
    options: ListQuery = {}): Promise<T[]> => {

    let query = Object.values(options)
        .reduce((q, [key, value]) => q[key](...value), collection);
    query = wheres.reduce((q, where) => q.where(...where), query);

    return (await query
        .get()).docs
        .map(doc => ({id: doc.id, ...doc.data()} as unknown as T));
};

