const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CatsSchema = new Schema(
  {
    breed: { type: String, required: true },
    caracter: { type: String, required: true },
    hair_type: { type: String, required: true},
    size: { type: String, required: true },
    weight: { type: String, required: true },
    picture: { type: String, required: true },
    tipomascota: {type: String, required: true },
    
  },
  { timestamps: true }
);

const Cats = mongoose.model("cats", CatsSchema);

module.exports = Cats;