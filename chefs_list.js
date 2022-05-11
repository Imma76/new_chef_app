/* eslint-disable import/no-mutable-exports */
export let chefsList = [];

export const deleteChef = (id) => {
  chefsList = chefsList.filter((chefs) => chefs.id !== id);
  return chefsList;
};

export const findById = (id) => chefsList.filter((chef) => id === chef.id);
