const { Drinks, Questions } = require("../models");

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    drinks: async () => {
      // Get and return all documents from the classes collection
      return Drinks.find({});
    },
    questions: async () => {
      return Questions.find({});
    },
  },

  Mutation: {
    getOptions: async (parent, args) => {
      const { nextKey, selectedOptions } = args;

      const dbOpt = selectedOptions.reduce((r, opt) => {
        // r['liquor'] = 'Rum'
        r[opt.key] = opt.value;
        // r.liquor = 'Rum'
        return r;
      }, {});

      const responses = await Drinks.find(dbOpt);

      /*
  
      let res = response.map(opt => opt[nextKey]) -> ['Rum', 'Rum', 'Tequila', ...]
      let set  = new Set(res) -> {'Rum', 'Tequila'}
      let finalUniqueKeys = Array.from(set) -> ['Rum', 'Tequila']
  
      */

      // No more questions send the final results
      if (!nextKey) {
        return { data: responses, options: [] };
      }

      const nextOptions = Array.from(
        new Set(responses.map((opt) => opt[nextKey]))
      );

      return { data: responses, options: nextOptions };
    },
  },
};

module.exports = resolvers;
