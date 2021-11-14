import ApiWrapper from './ApiWrapper';

interface IWeatherApp {
  getWeatherByCity(cityName: string): {};
  getWeatherByZipCode(zipCode: string): {};
  getWeatherByCoordinates(lat: number, long: number): {};
}

class WeatherApp implements IWeatherApp {
  apiWrapper: ApiWrapper;

  constructor(apiWrapper: ApiWrapper) {
    this.apiWrapper = apiWrapper;
  }
  getWeatherByCity(cityName: string) {
    return this.apiWrapper.weatherByCity(cityName);
  }

  getWeatherByZipCode(zipCode: string) {
    return this.apiWrapper.weatherByZip(zipCode);
  }

  getWeatherByCoordinates(lat: number, long: number) {
    return this.apiWrapper.weatherByCoordinates(lat, long);
  }
}

export default WeatherApp;
