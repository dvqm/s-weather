const URL_DATA_V25 = 'https://api.openweathermap.org/data/2.5';

const URL_GEO_V10 = 'https://api.openweathermap.org/geo/1.0';

export const LookDuplicates = async (cityName) => {
  const request = await fetch(
    `${URL_GEO_V10}/direct?q=${cityName}&limit=10&appid=${process.env.WEATHER_API_KEY}`,
    { mode: 'cors' },
  );

  const response = await request.json();

  return response;
};

export const GetLocation = async (cityData) => {
  const request = await fetch(
    `${URL_GEO_V10}/reverse?lat=${cityData.lat}&lon=${cityData.lon}&appid=${process.env.WEATHER_API_KEY}`,
    { mode: 'cors' },
  );

  const response = await request.json();

  const forecastRequest = await fetch(
    `${URL_DATA_V25}/onecall?lat=${cityData.lat}&lon=${cityData.lon}&exclude=minutely&appid=${process.env.WEATHER_API_KEY}`,
    { mode: 'cors' },
  );

  const forecastResponse = await forecastRequest.json();

  const data = {};

  [data.common] = response;

  data.forecast = forecastResponse;

  const weather = forecastResponse.current.weather[0];

  data.forecast.current.weather[0].icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

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
