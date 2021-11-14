import ApiWrapper from '../src/ApiWrapper';
import WeatherApp from '../src/WeatherApp';

describe('Weather App', () => {
  const apiWrapper: ApiWrapper = new ApiWrapper('asd', 'sd');
  const weatherByCitySpy = jest.spyOn(apiWrapper, 'weatherByCity');
  const weatherByZipSpy = jest.spyOn(apiWrapper, 'weatherByZip');
  const weatherByGeoSpy = jest.spyOn(apiWrapper, 'weatherByCoordinates');

  const wApp = new WeatherApp(apiWrapper);

  // it('should create a WeatherApp instance', () => {
  //  expect(typeof wApp).toBe(WeatherApp);
  // }) ;

  it('should call Weather by city in the wrapper', () => {
    wApp.getWeatherByCity('Montreal');

    expect(weatherByCitySpy).toHaveBeenCalledTimes(1);
    expect(weatherByCitySpy).toHaveBeenCalledWith('Montreal');
  });

  it('should call Weather by Zip in the wrapper', () => {
    wApp.getWeatherByZipCode('12345');

    expect(weatherByZipSpy).toBeCalledTimes(1);
    expect(weatherByZipSpy).toHaveBeenCalledWith('12345');
  });

  it('should call Weather by GEO coordinates in the wrapper', () => {
    wApp.getWeatherByCoordinates(1, 2);

    expect(weatherByGeoSpy).toBeCalledTimes(1);
    expect(weatherByGeoSpy).toHaveBeenCalledWith(1, 2);
  });
});
