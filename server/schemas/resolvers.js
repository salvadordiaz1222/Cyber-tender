const { Drinks, Questions } = require("../models");

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    Drinks: async () => {
      // Get and return all documents from the classes collection
      return Drinks.find({});
    },

    getDrinks: async (parent, { options, nextKey }) => {
      const dbOpt = options.reduce((r, opt) => {
        r[opt.key] = opt.value;

        return r;
      }, {});

      const responses = await Drinks.find(dbOpt);

      if (!nextKey) {
        return { data: responses, options: nextOptions };
      }

      const nextOptions = Array.from(
        new Set(response.map((opt) => opt[nextKey]))
      );

      return { data: responses, options: nextOptions };
    },
  },
};

module.exports = resolvers;
