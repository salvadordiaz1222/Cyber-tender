// using unit 21 activity 11 as set up template

const { Schema, model } = require('mongoose');

const drinksSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  liquor: String,
  style: String,
  flavor: String,
  mixer: String,
  strong: String,
  ingredients: [String],
  directions: String,
  image: String,
});

const Drinks = model('Drinks', drinksSchema);

module.exports = Drinks;