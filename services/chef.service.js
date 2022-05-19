/* eslint-disable camelcase */
import { chefsList, deleteChefById, findById, Chef } from '../models/chef.model.js';

const create = (id, name, type_of_food, location) => {
  const newchef = {
    id,
    name,
    type_of_food,
    location
  };
  const checkId = chefsList.filter((chef) => chef.id === id);

  if (checkId.length !== 0) {
    return false;
  }

  Chef.create(newchef);
  return true;
};

const getAllChefs = () => chefsList;

const findChefById = (id) => findById(id);

const editChefById = (name, location, type_of_food, id) => {
  chefsList.forEach((chefs) => {
    if (chefs.id === id) {
      if (name) {
        chefs.name = name;
      }
      if (location) {
        chefs.location = location;
      }
      if (type_of_food) {
        chefs.type_of_food = type_of_food;
      }
    }
  });
};

const deleteChef = (id) => deleteChefById(id);

export default {
  create,
  find: getAllChefs,
  findChefById,
  getAllChefs,
  editChefById,
  deleteChef

};
