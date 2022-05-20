/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import express from 'express';

import 'express-async-errors';
import middlewares from './middlewares/index.js';

const app = express();

middlewares(app);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('server is listening on port', PORT);
});
