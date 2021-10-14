// using unit 21 activity 11 as set up template
const { Schema, model } = require('mongoose');

const questionsSchema = new Schema({
  question: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  choices: [
    {
      type: String,
      trim: true,
    },
  ],
});

const Profile = model('Profile', questionSchema);

module.exports = Questions;