import express from 'express';
import chefRouter from './chef.route.js';
import userRouter from './user.route.js';

const router = express.Router();

router.use('/chefs', chefRouter);
router.use('/users', userRouter);


export default router;
