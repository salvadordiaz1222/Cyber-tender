// using unit 21 activity 11 as set up template
const { Schema, model } = require('mongoose');

const questionsSchema = new Schema({
  question: {
    type: String,
    required: true,
    unique: true,
  },
  choices: [
    {
      type: String,
      trim: true,
    },
  ]
});

const Questions = model('Questions', questionsSchema);

module.exports = Questions;