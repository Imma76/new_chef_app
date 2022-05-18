import mongoose from 'mongoose';

// const { MongoClient } = require('mongodb').MongoClient;

const url = 'mongodb+srv://Emma:SpC9Qvv4luueqBPY@cluster0.kx41p.mongodb.net/?retryWrites=true&w=majority';

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
