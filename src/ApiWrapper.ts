import fetch from 'cross-fetch';

class ApiWrapper {
  API: string;

  constructor(url: string, key: string) {
    this.API = `${url}?appid=${key}`;
  }
  async weatherByCity(cityName: string) {
    return await this.fetchCall(`q=${cityName}`);
  }

  async weatherByZip(zip: string) {
    return await this.fetchCall(`zip=${zip}`);
  }

  async weatherByCoordinates(lat: number, long: number) {
    return await this.fetchCall(`lat=${lat}&lon=${long}`);
  }

  private async fetchCall(q: string) {
    try {
      const response = await fetch(`${this.API}&${q}`);
      const data = await response.json();

      return data;
    } catch (error) {
      console.log('error', error);
    }
  }
}

export default ApiWrapper;
