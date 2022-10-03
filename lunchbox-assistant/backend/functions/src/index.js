const functions = require('firebase-functions');
const admin = require('firebase-admin');

const express = require('express');

const { ApolloServer, gql } = require('apollo-server');

admin.initializeApp();

const db = admin.firestore()
const app = express();

const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
    email: String
  }

  type Query {
    users: [User]
  }
`

const resolvers = {
  Query: {
    users: () => {
      return new Promise((resolve, reject) => {
        fetchAllUsers((data: any) => {
          resolve(data)
        })
      })
    }
  }
}

const fetchAllUsers = (callback: any) => {
  console.log(typeof callback)
  db.collection('users')
    .get()
    .then((item: any) => {
      const items: any[] = [];
      item.docs.forEach((item: any) => {
        items.push(item.data())
      })
      return callback(items);
    })
    .catch((e: any) => console.log(e));
}

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/' })
exports.graphql = functions.https.onRequest(app);