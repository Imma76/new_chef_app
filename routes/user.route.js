import express from 'express';
import UserController from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/', UserController.create);
userRouter.put('/:id', UserController.update);

export default userRouter;