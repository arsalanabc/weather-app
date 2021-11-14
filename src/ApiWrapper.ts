class ApiWrapper {
  weatherByCity(cityName: string) {
    return cityName;
  }

  weatherByZip(cityName: string) {
    return cityName;
  }

  weatherByCoordinates(lat: number, long: number) {
    console.log(lat, long);
    return '';
  }
}

export default ApiWrapper;
