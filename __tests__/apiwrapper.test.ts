// import { assert } from 'chai';
import ApiWrapper from '../src/ApiWrapper';

describe('Api Wrapper', () => {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
  const API_KEY = `cf002751564a4c78f5f7ed479f1b9ba3`;

  const apiWrapper: ApiWrapper = new ApiWrapper(API_URL, API_KEY);

  it('should call Weather by city', async () => {
    const CITY = 'Montreal';
    const cityWeather = await apiWrapper.weatherByCity(CITY);

    expect(cityWeather).not.toBeNull;
    expect(cityWeather).toHaveProperty('name');
    expect(cityWeather.name).toEqual(CITY);
  });

  it('should call Weather by zip', async () => {
    const zipNY = '10001';
    const cityWeather = await apiWrapper.weatherByZip(zipNY);

    expect(cityWeather).not.toBeNull;
    expect(cityWeather.name).toEqual('New York');
  });

  it('should call Weather by coordinates', async () => {
    const lon = -122.08;
    const lat = 37.39;
    const cityWeather = await apiWrapper.weatherByCoordinates(lat, lon);

    expect(cityWeather).not.toBeNull;
    expect(cityWeather).toHaveProperty('coord');
    expect(cityWeather.coord).toEqual({ lat, lon });
  });
});
