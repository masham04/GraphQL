const { ApolloServer, gql } = require('apollo-server');
// import './students.json'

const students =[
    {
        "id": 1,
        "name": "Ali",
        "email": "ali@gmail.com",
        "age": 18
    },
    {
      "id": 2,
        "name": "Tarqa",
        "email": "geesi@gmail.com",
        "age": 16
    }
]
const resolvers = {
    Query: {
      students: () => students,
    },
    Mutation: {
      addStudent: (e,{input}) => {
        students.push({
          id: input.id,
          name: input.name,
          email: input.email,
          age: input.age
        })
        return{
          id: input.id,
          name: input.name,
          email: input.email,
          age: input.age
        }
      }
    }
  };

const typeDefs = gql`
 
  type Student  {
    id: Int
    name: String
    email: String
    age: Int
  }
  input stdInput {
    id: Int
    name: String
    email: String
    age: Int
  } 

  type Query {
    students: [Student]
  }
  type Mutation {
    addStudent(input: stdInput): Student
  }
`;
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});