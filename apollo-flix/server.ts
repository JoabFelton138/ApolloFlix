import { ApolloServer } from 'apollo-server';
import typeDefs from './src/apollo/schema/typeDefs';
import resolvers from './src/apollo/schema/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
