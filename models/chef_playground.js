// const { MongoClient } = require('mongodb');
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri = 'mongodb+srv://Emma:SpC9Qvv4luueqBPY@cluster0.kx41p.mongodb.net/?retryWrites=true&w=majority';
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// Import the mongoose module
// const mongoose = require('mongoose');

// // Set up default mongoose connection
// const mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// // Get the default connection
// const db = mongoose.connection;

// // Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


import  { MongoClient } from 'mongodb';

async function main() {
  console.log('load')

  const uri = 'mongodb+srv://Emma:SpC9Qvv4luueqBPY@cluster0.kx41p.mongodb.net/?retryWrites=true&w=majority';

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);
