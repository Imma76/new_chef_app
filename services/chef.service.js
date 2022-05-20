/* eslint-disable camelcase */
import { Chef } from '../models/chef.model.js';

/**
 * @description ...
 * @param {object} newChefData chef data
 * @returns {object} the newly created chef
 */
const create = async (newChefData = {}) => {
  // try {
  const newChef = new Chef(newChefData);
  // const newChef = await Chef.create(newChefData);

  await newChef.save();

  return newChef;
};

const getAllChefs = async () => {
  const allChef = await Chef.find({}).then((chef) => chef).catch((err) => {
    console.log(err);
  });

  return allChef;
};

const findChefByName = async (name) => await Chef.findOne({ name }).then((chef) => {
  
  return chef;
}).catch((err) => console.log(err));

const findChefById = async (_id) => await Chef.findOne({ _id }).then((chef) => {

  return chef;
}).catch((err) => console.log(err));

const editChefById = async (data) => {
  await Chef.updateOne({ _id: data.id }, { $set: { name: data.name } });
};

const deleteChef = async (id) => await Chef.deleteOne({ _id: id })
  .then((value))
  .catch((err) => console.log(err));

export default {
  create,
  findChefByName,
  getAllChefs,
  editChefById,
  deleteChef,
  findChefById

};
