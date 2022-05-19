/* eslint-disable import/no-mutable-exports */
import { mongoose } from 'mongoose';

export let chefsList = [];

export const chefSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  type_of_food: {
    type: Array,
    required: true
  }
});
export const Chef = mongoose.model('Chef', chefSchema);



export const deleteChefById = (id) => {
  chefsList = chefsList.filter((chefs) => chefs.id !== id);
  return chefsList;
};

export const findById = (id) => chefsList.filter((chef) => id === chef.id);

export default {
  deleteChefById,
  findById,
  chefsList,
  Chef
};
