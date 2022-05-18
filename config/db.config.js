import mongoose from 'mongoose';

// const { MongoClient } = require('mongodb').MongoClient;

const url = process.env.MONGODB_URI;

const database = () => {
  mongoose.connect(url)
    .then(() => {
      console.log('connected to database');
    })
    .catch((err) => {
      console.error('error connecting to database', err);
      throw new Error(err);
    });
};
export default  database;
