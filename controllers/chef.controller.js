/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import chefService from '../services/chef.service.js';
import { Chef } from '../models/chef.model.js';

class ChefController {
  createChef(req, res) {
    const {
      id, name, type_of_food, location
    } = req.body;

    const isValid = id != null && name != null && type_of_food != null && location != null;

    if (!isValid) {
      return res.status(400).json({
        status: 'failed',
        message: 'could not add new chef, complete all fields'
      });
    }
    const chefs = chefService.create(id, name, type_of_food, location);

    //  res.header('token', 'ezeh').status(204).send('here i am');
    if (chefs) {
      return res
        .status(201)
        .json({ status: 'sucess', body: chefService.getAllChefs() });
    }
    return res
      .status(201)
      .json({ status: 'failed', body: 'chef exists already' });
  }

  findAllChef(req, res) {
    const chefs = chefService.find();
    if (!chefs.length) {
      return res.status(404).send({
        success: false,
        message: 'No chef was found'
      });
    }

    return res.status(200).send({
      success: true,
      message: 'List of chefs found',
      data: chefs
    });
  }

  findByChefById(req, res) {
    const { id } = req.params;
    const singlechefList = chefService.findChefById(id);

    if (singlechefList.length !== 0) {
      res.status(200).json({ status: 'sucess', chef: singlechefList });
    }
    res.status(200).json({ status: 'failed', message: 'could  not find chef' });
  }

  editChefById(req, res) {
    const {
      id, name, location, type_of_food
    } = req.body;

    if (!id) {
      return res.json({ status: 'failed', message: 'provide id' });
    } /// else {
    return res.json({ status: 'success', chef_list: chefService.editChefById(name, location, type_of_food, id) });
  }

  deleteChefById(req, res) {
    const { id } = req.body;
    if (!id) {
      return res.json({ status: 'false', message: 'no id, could not delete' });
    }
    const existChef = chefService.findChefById(id);

    // if no value found
    const checkFound = existChef.length;
    if (!checkFound) {
      return res.status(404).send({
        success: false,
        message: 'Chef not found'
      });
    }

    const result = chefService.deleteChef(id);

    // const newList = chefsList.filter((chefs) =>  chefs.id !== id)
    return res.json({ status: 'sucess', message: 'chef deleted sucessfully', chef_list: result });
  }
}

export default new ChefController();
