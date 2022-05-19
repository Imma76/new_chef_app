import express from 'express'
import hubController from '../controllers/hub.controller.js';

const hubRouter = express.Router()

hubRouter.get('/', hubController.list)
hubRouter.post('/', hubController.create)

export default hubRouter;
