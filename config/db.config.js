import mongoose from 'mongoose';
import dotenv from 'dotenv';

// const { MongoClient } = require('mongodb').MongoClient;

dotenv.config();

// const { MongoClient } = require('mongodb').MongoClient;

const url = process.env.DATABASE_URI;

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
export default database;
