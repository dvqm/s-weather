import { GetLocation, LookDuplicates } from './weatherData';
import uiCreator from './uiCreator';
import './ui.scss';
import './ui480px.scss';
import './ui420px.scss';

import contentCreator from './contentCreator';
import eventCreator from './eventCreator';

const App = () => {
  const uiCreate = uiCreator();

  const uiRemove = (...markers) => {
    [...markers].forEach((marker) => {
      const element = document.querySelector(marker);

      if (element) element.remove();
    });
  };

  const loader = () => ({
    add(text = 'Loading...') {
      const model = {
        tag: 'div',
        className: 'loader',
        c: {
          phrase: {
            tag: 'span',
            textContent: text,
          },
        },
      };
      uiCreate.render(document.body, uiCreate.node(model));
    },
    remove() {
      const element = document.querySelector('.loader');

      if (element) element.remove();
    },
  });

  const errorMessage = (text) => {
    const error = contentCreator().errorMessage(text);

    uiCreate.render(document.body, error);

    setTimeout(() => {
      error.remove();
    }, 5000);
  };

  const forecastPage = (data) => {
    loader().remove();

    const content = contentCreator().forecastPage(data);

    const events = eventCreator();

    let hourlyOffset;
    let dailyOffset;

    switch (true) {
      case window.innerWidth <= 480 && window.innerWidth > 420:
        [hourlyOffset, dailyOffset] = [3, 2];

        break;

      case window.innerWidth <= 420:
        [hourlyOffset, dailyOffset] = [2, 1];

        break;

      default:
        [hourlyOffset, dailyOffset] = [6, 4];

        break;
    }

    const dailySliderEvent = (node) => events.slider(node, {
      offset: hourlyOffset,
      shell: 'hourlyCards',
      card: 'card',
      prev: 'hourlyPrev',
      next: 'hourlyNext',
    });

    const hourlySliderEvent = (node) => events.slider(node, {
      offset: dailyOffset,
      shell: 'dailyCards',
      card: 'card',
      prev: 'dailyPrev',
      next: 'dailyNext',
    });

    const cityInputEvent = (node) => events.cityInput(node, checkIfOneCity, {
      inp: 'cityInput',
      btn: 'submitBtn',
    });

    uiCreate.render(
      document.body,
      uiCreate.assemble(content)(
        dailySliderEvent,
        hourlySliderEvent,
        cityInputEvent,
      ),
    );
  };

  const cityListDialog = (list) => {
    const content = contentCreator().citiesList(list);

    const events = eventCreator();

    const forecast = async (city) => {
      const data = await GetLocation(city);

      uiRemove('.city', '.container');

      loader().add();

      forecastPage(data);
    };

    uiCreate.render(document.body, events.citiesList(content, list, forecast));
  };

  const checkIfOneCity = async (city) => {
    loader().remove();

    const data = await LookDuplicates(city);
    if (data.length === 0) {
      errorMessage('No such city found. Please, check the name.');
    } else if (data.length === 1) {
      const forecast = await GetLocation(data[0]);

      uiRemove('.city', '.container');

      forecastPage(forecast);
    } else {
      cityListDialog(data);
    }
  };

  const getLocationFromBrowser = async (location) => {
    loader().remove();

    loader().add();

    const coords = {
      lon: location.coords.longitude,
      lat: location.coords.latitude,
    };

    const forecast = await GetLocation(coords);

    forecastPage(forecast);
  };

  const manualInputPage = (error) => {
    loader().remove();

    errorMessage(error.message);

    const content = contentCreator().manualInput();

    const events = eventCreator();

    uiCreate.render(
      document.body,
      events.cityInput(content, checkIfOneCity, {
        inp: 'cityInput',
        btn: 'submitBtn',
      }),
    );
  };

  return {
    start() {
      loader().add(
        'Retreiving location. Please, allow it in your browser settings',
      );

      navigator.geolocation.getCurrentPosition(
        getLocationFromBrowser,
        manualInputPage,
      );
    },
  };
};

export default App;
