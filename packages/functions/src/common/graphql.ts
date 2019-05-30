export const mergeResolvers = (...resolvers: any[]) =>
    resolvers.reduce(({Query: accQuery, Mutation: accMutation, ...accRest}, {Query, Mutation, ...rest}) => ({
        Query: {
            ...accQuery,
            ...(Query || {}),
        },
        Mutation: {
            ...accMutation,
            ...(Mutation || {}),
        },
        ...accRest,
        ...rest
    }), {Query: {}, Mutation: {}});
