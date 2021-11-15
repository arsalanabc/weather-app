import ApiWrapper from './ApiWrapper';

interface IWeatherApp {
  getWeatherByCity(cityName: string): Promise<any>;
  getWeatherByZipCode(zipCode: string): Promise<any>;
  getWeatherByCoordinates(lat: number, long: number): Promise<any>;
}

class WeatherApp implements IWeatherApp {
  apiWrapper: ApiWrapper;

  constructor(apiWrapper: ApiWrapper) {
    this.apiWrapper = apiWrapper;
  }
  async getWeatherByCity(cityName: string) {
    return await this.apiWrapper.weatherByCity(cityName);
  }

  async getWeatherByZipCode(zipCode: string) {
    return await this.apiWrapper.weatherByZip(zipCode);
  }

  async getWeatherByCoordinates(lat: number, long: number) {
    return await this.apiWrapper.weatherByCoordinates(lat, long);
  }
}

export default WeatherApp;
