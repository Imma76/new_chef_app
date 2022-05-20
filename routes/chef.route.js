/* eslint-disable import/extensions */
import express from 'express';
import chefController from '../controllers/chef.controller.js';

const router = express.Router();

router.get('/chef_list', chefController.findAllChef);
router.post('/new_chef', chefController.createChef);
router.get('/chef_list/:name', chefController.findChefByName);
router.patch('/update_chef', chefController.editChefById);
router.delete('/delete_chef', chefController.deleteChefById);

export default router;
