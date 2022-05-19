import mongoose from "mongoose";

const hubSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  numberOfStaff: Number
})

const Hub = mongoose.model('Hub', hubSchema); 

export default Hub;
