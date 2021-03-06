import express from 'express';
import morgan from 'morgan';
import routes from '../routes/index.route.js';

const middlewares = (app) => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(morgan('dev'));

  // middleware
  app.use(routes);
};

export default middlewares;
