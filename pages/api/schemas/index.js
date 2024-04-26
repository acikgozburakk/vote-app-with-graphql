import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    avatar: String!
    job: String!
    country: String!
    voteCount: Int!
    adress: String!
    phone: String!
    bio: String!
  }

  type Query {
    users(count: Int!): [User!]!
  }
`;
