const { Drinks , Questions } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    Drinks: async () => {
      // Get and return all documents from the classes collection
      return Drinks.find({});
    }

},
};

module.exports = resolvers;