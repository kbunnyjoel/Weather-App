const next = require('next')
const express = require('express');
const graphqlHTTP = require('express-graphql');
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const { buildSchema } = require('graphql');
const fetch = require("node-fetch");


let place_API ="AIzaSyAoFUij9oJskNDc4opPGuYyquMmuDbFeGk";
let city="melbourne";

let country="au";
const MyGraphQLSchema = buildSchema(`
type Query {
  hello: String
  weathers: WeatherData!
}

type Weather {
  id: Int
  description: String
  main: String
  icon: String
}

type Coordinations {
  lon: Float
  lat: Float
}

type MainData{
  temp: Float
  pressure: Int
  humidity: Int
  temp_min: Float
  temp_max: Float
}

type Wind {
  speed: Float
  deg: Int
}

type System{
  type: Int
  id: Int
  message: Float
  country: String
  sunrise: Int
  sunset: Int
}

type Clouds{
  all: Int
}

type WeatherData
{
  coord: Coordinations
  weather: [Weather]
  base: String
  main: MainData
  visibility: Int
  wind: Wind
  clouds: Clouds
  dt: Int
  sys: System
  id: ID
  name: String
  cod: Int
  }
`);



app.prepare().then(() => {
  // const parsedUrl = parse(req.url, true)
  //   const { pathname, query } = parsedUrl

  // console.log(pathname);

  // if (pathname === '/a') {
  //   // app.render(req, res, '/a', query)
  //   res.send({ hello: 'world' });
  //   res.end();
  // } else if (pathname === '/b') {
  //   app.render(req, res, '/b', query)
  // } else {
  //   handle(req, res, parsedUrl)
  // }

  const root = {
    hello: () => { return "Hello world from ApolloServer on Now 2.0!"; }, 
    weathers: async () => {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&appid=08159436d6bdc17558a96b5884a6368a');
      return response.json();
    }
  };


  const server = express();

  server.use(
    '/graphql',
    graphqlHTTP({
      schema: MyGraphQLSchema,
      rootValue: root,
      graphiql: true,
    }),
  );

  server.get('/a', (req, res) => {
    return res.json({ test: 'value nothings' })
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
})