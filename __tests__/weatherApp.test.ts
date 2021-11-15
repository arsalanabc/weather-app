import ApiWrapper from '../src/ApiWrapper';
import WeatherApp from '../src/WeatherApp';

jest.mock('../src/ApiWrapper.ts');

describe('Weather App', () => {
  const apiWrapper = new ApiWrapper('dummy_url', 'dummy_key');
  const wApp = new WeatherApp(apiWrapper);

  it('should call Weather by city in the wrapper', () => {
    wApp.getWeatherByCity('Montreal');

    expect(apiWrapper.weatherByCity).toHaveBeenCalledTimes(1);
    expect(apiWrapper.weatherByCity).toHaveBeenCalledWith('Montreal');
  });

  it('should call Weather by Zip in the wrapper', () => {
    wApp.getWeatherByZipCode('12345');

    expect(apiWrapper.weatherByZip).toBeCalledTimes(1);
    expect(apiWrapper.weatherByZip).toHaveBeenCalledWith('12345');
  });

  it('should call Weather by GEO coordinates in the wrapper', () => {
    wApp.getWeatherByCoordinates(1, 2);

    expect(apiWrapper.weatherByCoordinates).toBeCalledTimes(1);
    expect(apiWrapper.weatherByCoordinates).toHaveBeenCalledWith(1, 2);
  });
});
