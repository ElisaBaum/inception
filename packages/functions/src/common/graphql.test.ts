import {mergeResolvers} from './graphql';

describe('common/graphql', () => {

    describe('mergeResolvers', () => {

        it('should merge resolvers properly', () => {
            const resolverA = {Query: {a: 1}, Mutation: {a: 1}, a: {aa: 1}};
            const resolverB = {Query: {b: 2}, Mutation: {b: 2}, b: {bb: 2}};
            const expected = {Query: {a: 1, b: 2}, Mutation: {a: 1, b: 2}, a: {aa: 1}, b: {bb: 2}};
            const result = mergeResolvers(resolverA, resolverB);
            expect(result).toEqual(expected);
        });

    });

});

