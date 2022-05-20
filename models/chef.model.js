import mongoose from 'mongoose';

const chefSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
    // unique: true
  },
  location: {
    type: String,
    required: true
  },
  type_of_food: {
    type: Array,
    required: true
  }
});
// creating a model
export const Chef = mongoose.model('Chef', chefSchema);

export default Chef;
