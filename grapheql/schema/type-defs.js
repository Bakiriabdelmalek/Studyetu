const {gql} = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favmovies:[Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input CreateUserInput{
    name: String!
    username: String!
    age: Int = 18
    nationality: Nationality = BRAZIL
  
  }
  input usernameinput{
    id:ID!
    newUsername:String!
  }
  input deletinput{
    id:ID!
  }

  type Mutation{
    createUser(input:CreateUserInput!):User
    updateUsername(input:usernameinput!):User
    deleteUser(input:deletinput!):User
  }

  enum Nationality {
    CANADA
    BRAZIL
    CAMERON
    ESTONIA
    MEXICO
  }
`;

module.exports = {typeDefs};
