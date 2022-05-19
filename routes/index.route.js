import express from 'express';
import chefRouter from './chef.route.js';
import userRouter from './user.route.js';
import hubRouter from './hub.route.js';

const router = express.Router();

router.use('/chefs', chefRouter);
router.use('/users', userRouter);
router.use('/hubs', hubRouter);


export default router;
