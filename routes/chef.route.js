/* eslint-disable import/extensions */
import express from 'express';
import chefController from '../controllers/chef.controller.js';

const router = express.Router();

router.get('/chef_list', chefController.find);
router.post('/new_chef', chefController.create);
router.get('/chef_list/:id', chefController.findById);

export default router;
