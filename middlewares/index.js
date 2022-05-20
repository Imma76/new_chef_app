import express from 'express';
import morgan from 'morgan';
import routes from '../routes/index.route.js';
import database from '../config/db.config.js';
import handleError from './errors.middleware.js';

const middlewares = (app) => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(morgan('dev'));

  // middleware
  app.use(routes);
  database();


  app.use(handleError);
};

export default middlewares;
