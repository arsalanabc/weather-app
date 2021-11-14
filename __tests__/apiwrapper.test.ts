import ApiWrapper from '../src/ApiWrapper';

describe('Api Wrapper', () => {
  const API_URL = `https://openweathermap.org/api`;
  const API_KEY = `cf002751564a4c78f5f7ed479f1b9ba3`;

  const apiWrapper: ApiWrapper = new ApiWrapper(API_URL, API_KEY);

  it('should call Weather by city', async () => {
    const CITY = 'Montreal';
    const cityWeather = await apiWrapper.weatherByCity(CITY);

    console.log(cityWeather);

    expect(cityWeather).not.toBeNull;
    expect(cityWeather).toHaveProperty('name');
  });
});
