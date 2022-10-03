const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];


const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const url = 4000;

// server를 감시하고 있다가, 실행되면 콘솔창에 알림메시지를 보내줌

server.listen().then(() => {
  console.log(`🚀  Server ready at http://localhost:${url}`);
});