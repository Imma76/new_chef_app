/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import chefService from '../services/chef.service.js';

class ChefController {
  create(req, res) {
    const {
      id, name, type_of_food, location
    } = req.body;

    const isValid = (id != null && name != null && type_of_food != null && location != null);

    if (!isValid) {
      return res.status(400).json({
        status: 'failed',
        message: 'could not add new chef, complete all fields'
      });
    }
    const chefs = chefService.create(id, name, type_of_food, location);

    //  res.header('token', 'ezeh').status(204).send('here i am');
    if (chefs) {
      return res.status(201).json({ status: 'sucess', body: chefService.chefsList });
    }
    return res.status(201).json({ status: 'failed', body: 'chef exists already' });
  }

  find(req, res) {
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

  findById(req, res) {
    const { id } = req.params;
    const singlechefList = chefService.findChefById(id);

    if (singlechefList.length !== 0) {
      res.status(200).json({ status: 'sucess', chef: singlechefList });
    }
    res.status(200).json({ status: 'failed', message: 'could  not find chef' });
  }
}

export default new ChefController();
