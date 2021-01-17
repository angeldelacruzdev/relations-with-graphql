import {GraphQLServer} from 'graphql-yoga';

import { resolvers } from './graphql/resolvers';
import { typesDefs } from './graphql/typesDefs';

const server = new  GraphQLServer({
    typeDefs: typesDefs, 
    resolvers
});

server.start({port: 3002}, ({port}) => {
    console.log("server is running", port)
})