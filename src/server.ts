import * as express from 'express';
import ApiWrapper from './ApiWrapper';
import WeatherApp from './WeatherApp';

const app = express();
const port = 3000;
const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = `cf002751564a4c78f5f7ed479f1b9ba3`;

const apiWrapper = new ApiWrapper(API_URL, API_KEY);
const wApp = new WeatherApp(apiWrapper);

app.get('/', async (req, res) => {
  const { query } = req;
  let result = {};
  if ('city' in query) {
    const { city: cityName } = query;
    result = await wApp.getWeatherByCity(cityName as string);
  } else if ('zip' in query) {
    const { zip } = query;
    result = await wApp.getWeatherByZipCode(zip as string);
  } else if ('lat' in query && 'lon' in query) {
    const { lat, lon } = query;
    result = await wApp.getWeatherByCoordinates(
      parseInt(lat as string),
      parseInt(lon as string),
    );
  } else {
    result = { message: 'Invalid query params. Please see the api doc' };
  }

  res.send({ result });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
