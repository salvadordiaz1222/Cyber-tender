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
  type Questions {
    _id: ID
    question: String
    key: String
    order: Int
  }
  input SelectedOptions {
    key: String
    value: String
  }
  type Options {
    data: [Drinks]
    options: [String]
  }
  type Query {
    drinks: [Drinks]!
    questions: [Questions]
  }
  type Mutation {
    getOptions(selectedOptions: [SelectedOptions]!, nextKey: String): Options
  }
`;

module.exports = typeDefs;
