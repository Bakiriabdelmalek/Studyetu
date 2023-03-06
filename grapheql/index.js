const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./schema/type-defs')
const {resolvers} =require("./schema/resolves")

const server = new ApolloServer({typeDefs,resolvers});

server.listen().then(({url})=>{
    console.log(`API running at ${url}:)`);
}) 