/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import chefService from '../services/chef.service.js';

class ChefController {
  async createChef(req, res) {
    const {
      name, type_of_food, location
    } = req.body;

    const isValid = name != null && type_of_food != null && location != null;

    if (!isValid) {
      return res.status(400).json({
        status: 'failed',
        message: 'could not add new chef, complete all fields'
      });
    }

    // find if exist
    const chefExist = await chefService.findChefByName(name);

    if (!_.isEmpty(chefExist)) {
      return res.status(404).send({
        success: false,
        message: 'Chef already exist'
      });
    }

    // const chefs = await chefService.create(id, name, type_of_food, location);
    const data = {
      name, type_of_food, location
    };

    const newChef = await chefService.create(data);

    return res
      .status(201)
      .send({ success: true, message: 'created', data: newChef });
  }

  async findAllChef(req, res) {
    const chefs = await chefService.getAllChefs();
    if (_.isEmpty(chefs)) {
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

  async findChefByName(req, res) {
    const { name } = req.body;
    const singlechefList = await chefService.findChefByName(name);

    if (!_.isEmpty(singlechefList)) {
      return res.status(200).json({ status: 'sucess', chef: singlechefList });
    }
    return res.status(200).json({ status: 'failed', message: 'could  not find chef' });
  }

  async editChefById(req, res) {
    const {
      id, name, location, type_of_food
    } = req.body;

    if (!id) {
      return res.json({ status: 'failed', message: 'provide id' });
    } /// else {
    const data = {
      name, location, type_of_food, id
    };
    const allChef = await chefService.getAllChefs();
    for (let chef = 0; chef < allChef.length; chef++) {
      if (allChef[chef]._id.toString() == data.id.toString()) {
        console.log('yessss')
        if (data.name) {
          await chefService.editChefById(data);
        }
        return res.json({ status: 'success', message: 'profile updated sucessfully'});
      }
    }
    return res.json({ status:false, message: 'id does not match a user'});
  }

  async deleteChefById(req, res) {
    const { id } = req.body;
    if (!id) {
      return res.json({ status: 'false', message: 'no id, could not delete' });
    }
    const existChef = await chefService.findChefById(id);

    // if no value found
  
    if (_.isEmpty(existChef)) {
      return res.status(404).send({
        success: false,
        message: 'Chef not found'
      });
    }

    const result = chefService.deleteChef(id);

    // const newList = chefsList.filter((chefs) =>  chefs.id !== id)
    return res.json({ status: 'sucess', message: 'chef deleted sucessfully'});
  }
}

export default new ChefController();
