import { gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    releaseDate: String!
    rating: Float!
  }
  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
  }
`;

export default typeDefs;
