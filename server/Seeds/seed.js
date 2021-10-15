// using unit 21 activity 11 as set up template

const db = require('../config/connection');
const { Drinks, Questions } = require('../models');
const drinksSeeds = require('./drinksData.json');
const questionsSeeds = require('./questionData.json');


db.once('open', async () => {

  await Drinks.deleteMany({});
  await Drinks.create(drinksSeeds);
  await Questions.deleteMany({});
  await Questions.create(questionsSeeds);

  console.log('all done!');
  process.exit(0);

});

// Origional try - catch code
// db.once('open', async () => {
//     try {
//       await Drinks.deleteMany({});
//       await Drinks.create(drinksSeeds);
//       await Questions.deleteMany({});
//       await Questions.create(questionsSeeds);

//       console.log('all done!');
//       process.exit(0);
//     } catch (err) {
//       throw err;
//     }
//   });