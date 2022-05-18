/* eslint-disable import/no-mutable-exports */
import { mongoose } from 'mongoose';

export let chefsList = [];

export const chefSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: 'This field is required'
  },
  email: {
    type: String,
    required: 'This field is required'
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
