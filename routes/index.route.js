import express from 'express';
import chefRouter from './chef.route.js';

const router = express.Router();

router.use('/chefs', chefRouter);

export default router;
