import mongoose from 'mongoose';
import dotenv from 'dotenv';

// const { MongoClient } = require('mongodb').MongoClient;

dotenv.config();

// const { MongoClient } = require('mongodb').MongoClient;

const database = () => {
  mongoose.connect(process.env.DATABASE_URI)
    .then(() => {
      console.log('connected to database');
    })
    .catch((err) => {
      console.error('error connecting to database', err);
      throw new Error(err);
    });
};
export default database;
