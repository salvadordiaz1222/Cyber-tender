const { Drinks, Questions } = require("../models");

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    Drinks: async () => {
      // Get and return all documents from the classes collection
      return Drinks.find({});
    },
    options: async (parent, args) => {
      const { nextKey, options } = args;
      const dbOpt = options.reduce((r, opt) => {
        // r['liquor'] = 'Rum'
        r[opt.key] = opt.value;
        // r.liquor = 'Rum'
        return r;
      }, {});

      /*
  
      {
  
      }
  
      */

      const responses = await Drinks.find(dbOpt);

      /*
  
      let res = response.map(opt => opt[nextKey]) -> ['Rum', 'Rum', 'Tequila', ...]
      let set  = new Set(res) -> {'Rum', 'Tequila'}
      let finalUniqueKeys = Array.from(set) -> ['Rum', 'Tequila']
  
      */

      // No more questions send the final results
      if (!nextKey) {
        return { data: responses };
      }

      const nextOptions = Array.from(
        new Set(response.map((opt) => opt[nextKey]))
      );

      return { data: responses, options: nextOptions };
    },

    //     getDrinks: async (parent, { options, nextKey }) => {
    //       const dbOpt = options.reduce((r, opt) => {
    //         r[opt.key] = opt.value;

    //         return r;
    //       }, {});

    //       const responses = await Drinks.find(dbOpt);

    //       if (!nextKey) {
    //         return { data: responses, options: nextOptions };
    //       }

    //       const nextOptions = Array.from(
    //         new Set(response.map((opt) => opt[nextKey]))
    //       );

    //       return { data: responses, options: nextOptions };
    //     },
  },
};

module.exports = resolvers;
