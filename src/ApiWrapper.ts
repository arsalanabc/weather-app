require('regenerator-runtime/runtime');
import fetch from 'node-fetch';

class ApiWrapper {
  API: string;

  constructor(url: string, key: string) {
    this.API = `${url}/appid=${key}`;
  }
  async weatherByCity(cityName: string) {
    const weatherByCity = await this.fetchCall(cityName);
    return weatherByCity;
  }

  weatherByZip(cityName: string) {
    return cityName;
  }

  weatherByCoordinates(lat: number, long: number) {
    console.log(lat, long);
    return '';
  }

  private async fetchCall(q: string) {
    const response = await fetch(`${this.API}&q=${q}`);
    const data = await response.json();
    return data;
  }
}

export default ApiWrapper;
