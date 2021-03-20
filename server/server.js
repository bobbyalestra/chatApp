


const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
    type Message {
        id : ID!
        user: String!
        content: String!
    }


    type Query {
        
    }
`

const server = new GraphQLServer();
server.start(({port}) => {
    console.log(`Server started on http://localhost:${port}/`)
})