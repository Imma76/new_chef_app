/* eslint-disable camelcase */
import { chefsList, findById } from '../models/chef.model.js';

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

  chefsList.push(newchef);
  return true;
};

const getAllChefs = () => chefsList;

const findChefById = (id) => findById(id);

export default {
  create,
  find: getAllChefs,
  findChefById,
  chefsList
};
