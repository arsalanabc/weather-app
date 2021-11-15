### Weather App

#### A simple app to get weather info by city name, zip code or geo coordinates.

### Before starting

- Add the API_KEY in .env file
- API_KEY also required in the apiwrapper tests.
- Server runs on `http://localhost:3000`
- Api documentation `http://localhost:3000/api-docs`

### Run locally for dev

- Live compiling of Typescript code
  - `npm run build:watch`
- Watches the compiled code for changes and restarts the
  - `npm run watch`

### Testing

- Watch tests for changes and re-run
  - `npm test:watch`
- Run all tests once with coverage
  - `npm test`

### Run in a docker

- Build image with latest tag
  - `make build-image`
- Run the app in a container
  - `make up`
