const URL_DATA_V25 = 'https://api.openweathermap.org/data/2.5';

const URL_GEO_V10 = 'https://api.openweathermap.org/geo/1.0';

export const LocationByCoords = async (coords) => {
  const lat = coords.latitude;

  const lon = coords.longitude;

  const request = await fetch(
    `${URL_GEO_V10}/reverse?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`,
    { mode: 'cors' },
  );

  const response = await request.json();

  return response;
};

export const LookDuplicates = async (cityName) => {
  const request = await fetch(
    `${URL_GEO_V10}/direct?q=${cityName}&limit=10&appid=${process.env.WEATHER_API_KEY}`,
    { mode: 'cors' },
  );

  const response = await request.json();

  return response;
};

export const LocationByName = async (cityData) => {
  const state = cityData.state ? `,${cityData.state}` : '';

  const request = await fetch(
    `${URL_DATA_V25}/weather?q=${cityData.name},${cityData.country}${state}&appid=${process.env.WEATHER_API_KEY}`,
    { mode: 'cors' },
  );

  const response = await request.json();

  const forecastRequest = await fetch(
    `${URL_DATA_V25}/onecall?lat=${cityData.lat}&lon=${cityData.lon}&exclude=minutely&appid=${process.env.WEATHER_API_KEY}`,
    { mode: 'cors' },
  );

  const forecastResponse = await forecastRequest.json();

  const data = {};

  data.coord = response.coord;

  data.main = response.main;

  data.wind = response.wind;

  data.sys = response.sys;

  data.name = response.name;

  data.country = response.sys.country;

  const [weather] = response.weather;

  data.weather = weather;

  data.weather.icon = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;

  data.forecast = forecastResponse;

  const setUrl = (array) => {
    array.forEach((card) => {
      const cond = card.weather[0];

      cond.icon = `http://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`;
    });
  };

  setUrl(data.forecast.hourly);

  setUrl(data.forecast.daily);

  return data;
};
