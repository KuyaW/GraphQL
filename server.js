const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Create schema
const schema = buildSchema(`
  type Query {
    hello: String,
    bryan: String
  }
`);

// Root resolver
const root = {
  hello: () => {
    return 'Hello from GraphQL!';
  },
  bryan: ()=>{
    return "Hello from Bryan";
  }
};

// Create Express app
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enables GraphiQL UI in browser
}));

// Start server
app.listen(4000, () => {
  console.log('🚀 Server running at http://localhost:4000/graphql');
});
