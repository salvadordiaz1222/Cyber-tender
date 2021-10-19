const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');

const mongoConnection = require('./config/connection');

const Drinks = require('./models/Drinks');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers
});


server.applyMiddleware({ app });


app.post('/options', async (req, res, next) => {
  /*
    BODY
    {
        options: [],
        nextKey: 'liquor'
    }
    */
  const { options, nextKey } = req.body;

  /*
    let r = {}
    options.forEach(opt => {
        // opt = {key: 'XXX', value: 'YYY'}
        // r['liquor'] = 'Rum'
        r[opt.key] = opt.value
        // r.liquor = 'Rum'
    })

    RESULT
    {
        liquor: 'Rum',
        style: 'Neat'
    }

    */

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
    res.json({ data: responses });
    return;
  }

  const nextOptions = Array.from(new Set(response.map((opt) => opt[nextKey])));

  res.json({ data: responses, options: nextOptions });

  /*

    {
        data: [
            {
                "name": "Rum Drink 1",
                "liquor": "Rum",
                "style": "Neat",
                "flavor": "Spicy",
                "strong": "Strong",
                "ingredients": "placeholder ingredients",
                "direction": "placeholder direction",
                "image": "http://imageplaceholder.com"
            },
            {
                "name": "Rum Drink 2",
                "liquor": "Rum",
                "style": "On the rocks",
                "flavor": "Spicy",
                "strong": "Strong",
                "ingredients": "placeholder ingredients",
                "direction": "placeholder direction",
                "image": "http://imageplaceholder.com"
            }
        ],
        options: ['Spicy']
    }

    */
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });


mongoConnection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});


// app.listen(PORT, () => {
//   console.log(`Example app listening at http://localhost:${PORT}`);
// });
