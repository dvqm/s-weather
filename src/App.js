import { GetLocation, LookDuplicates } from './weatherData';
import uiCreator from './uiCreator';
import './scss/ui.scss';

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
        id: 'loader',
        className: 'h2 ui-fullscreen d-flex justify-content-center align-items-center',
        c: [
          {
            tag: 'span',
            textContent: text,
          },
        ],
      };
      uiCreate.render('append')(document.body, uiCreate.node(model));
    },
    remove() {
      const element = document.querySelector('#loader');

      if (element) element.remove();
    },
  });

  const errorMessage = (text) => {
    if (text === '' || text === undefined) return;

    const error = contentCreator().errorMessage(text);

    uiCreate.render('prepend')(document.body, error);

    setTimeout(() => {
      error.remove();
    }, 5000);
  };

  const forecastPage = (data) => {
    loader().remove();

    uiRemove('#manualInput', '#forecastPage');

    const content = contentCreator().forecastPage(data);

    const events = eventCreator();

    const manageRows = (node) =>
      events.manageRows(node, {
        dayBtns: '.id-day-btn',
        dayTables: '.id-day-table',
      });

    const cityInputEvent = (node) =>
      events.cityInput(node, checkIfOneCity, {
        inp: '#cityInput',
        btn: '#submitBtn',
      });

    uiCreate.render('append')(
      document.body,
      uiCreate.assemble(content)(
        manageRows,
        cityInputEvent,
      ),
    );
  };

  const cityListDialog = (list) => {
    const content = contentCreator().citiesList(list);

    const events = eventCreator();

    const forecast = async (city) => {
      const data = await GetLocation(city);

      loader().add();

      forecastPage(data);
    };

    uiCreate.render('prepend')(document.body, events.citiesList(content, list, forecast));
  };

  const checkIfOneCity = async (city) => {
    loader().remove();

    const data = await LookDuplicates(city);

    if (data.length === 0) {
      errorMessage('No such city found. Please, check the name.');
    } else if (data.length === 1) {
      const forecast = await GetLocation(data[0]);

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

  const manualInputPage = (error = '') => {
    loader().remove();

    errorMessage(error.message);

    const content = contentCreator().manualInput();

    const events = eventCreator();

    uiCreate.render('append')(
      document.body,
      events.cityInput(content, checkIfOneCity, {
        inp: '#cityInput',
        btn: '#submitBtn',
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
