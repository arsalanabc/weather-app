import WeatherApp from '../src/WeatherApp';

describe('Weather App', () => {
  it('should create a WeatherApp instance', () => {
    const wApp = new WeatherApp();
    expect(typeof wApp).toBe(WeatherApp);
  });
});
