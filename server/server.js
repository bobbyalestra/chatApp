


const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
    type Message {}
`



const server = new GraphQLServer();
server.start(({port}) => {
    console.log(`Server started on http://localhost:${port}/`)
})