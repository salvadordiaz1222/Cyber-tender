const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Define which fields are accessible from the Class model
  type Drinks {
    _id: ID
    name: String
    liquor: String
    style: String
    flavor: String
    strong: String
    ingredients: [String]
    directions: String
    image: String
  }
  type Query {
    Drinks: [Drinks]!
  }
`;

module.exports = typeDefs;
