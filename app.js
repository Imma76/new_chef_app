/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import express from 'express';
 import middlewares from './middlewares/index.js';

const app = express();

middlewares(app);


/*
app.post('/new_chef', (req, res) => {
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

  const newchef = {
    id,
    name,
    type_of_food,
    location
  };
  const checkId = chefsList.filter((chef) => chef.id === id);

  if (checkId.length !== 0) {
    return res.status(400).json({ status: 'failed', message: 'chef already exist' });
  }

  chefsList.push(newchef);

  res.status(200).json({ status: 'success', chefs_list: chefsList });
});

app.get('/chef_list/:id', (req, res) => {
  const { id } = req.params;
  const singlechefList = chefsList.filter((chefs) => chefs.id === Number(id));

  if (singlechefList.length !== 0) {
    res.status(200).json({ status: 'sucess', chef: singlechefList });
  } else {
    res.status(200).json({ status: 'failed', message: 'could  not find chef' });
  }
});

app.patch('/update_chef', (req, res) => {
  const {
    id, name, location, type_of_food
  } = req.body;

  if (!id) {
    res.json({ status: 'failed', message: 'provide id' });
  } /// else {
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
      res.json({ status: 'success', chef_list: chefsList });
    }
  });
  // }
});

app.delete('/delete_chef', (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.json({ status: 'false', message: 'no id, could not delete' });
  }
  const existChef = findById(id);

  // if no value found
  const checkFound = existChef.length;
  if (!checkFound) {
    return res.status(404).send({
      success: false,
      message: 'Chfe not found'
    });
  }

  const result = deleteChef(id);

  // const newList = chefsList.filter((chefs) =>  chefs.id !== id)
  return res.json({ status: 'sucess', message: 'chef deleted sucessfully', data: result });
});
*/

app.listen(2000, () => {
  console.log('server is listening on port 2000');
});
