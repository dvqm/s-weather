import uiCreator from './uiCreator';

const contentCreator = () => {
  const uiCreate = uiCreator();

  const k2c = (temp) => {
    const kelvin = -273.16;

    return Math.round(temp + kelvin);
  };

  const setTime = (seconds, tz, template) => {

    const tzName = (tzOffsetSec) => {
      const tzOffsetHr = tzOffsetSec / 3600;

      const halfHrTZs = {
        '-8.75': 'Australia/Eucla',
        '-9.5': 'Australia/Darwin',
        '-10.5': 'Australia/Adelaide',
        '-11.5': 'Australia/Lord_Howe',
        '3.5': 'Asia/Tehran',
        '4.5': 'Asia/Kabul',
        '5.5': 'Asia/Kolkata',
        '6.5': 'Asia/Rangoon',
        '9.5': 'Pacific/Marquesas',
        '12.75': 'Pacific/Chatham',
        '13.75': 'Pacific/Apia'
      };

      if (tzOffsetHr in halfHrTZs) {
        return halfHrTZs[tzOffsetHr];
      } else {
        return `Etc/GMT${tzOffsetSec >= 0 ? '-' : '+'}${Math.abs(tzOffsetHr)}`;
      }
    }

    const convert24to00 = (date) => {
      return date.map((item) => {
        if (item.type === 'hour' && item.value === '24') {
          item.value = '00';
        }

        return item;
      });
    }

    const date = convert24to00(new Intl.DateTimeFormat('en', {
      timeZone: tzName(tz),
      year: 'numeric',
      month: 'short',
      weekday: 'short',
      day: '2-digit',
      hour: 'numeric',
      hour12: false,
      minute: '2-digit',
    }).formatToParts(new Date(seconds * 1000)));

    const findPart = (part) => {
      return date.find((item) => item.type === part);
    };


    return template
      .replace('YY', findPart('year').value)
      .replace('MM', findPart('month').value)
      .replace('DD', findPart('day').value)
      .replace('hh', findPart('hour').value)
      .replace('mm', findPart('minute').value)
      .replace('WW', findPart('weekday').value);

  };

  const dailyCard = (data) => {
    const tz = data.forecast.city.timezone;

    const groupPredictions = (predictions) => {
      const days = predictions.reduce((grouped, prediction) => {
        const localTime = setTime(prediction.dt, tz, 'MM-DD-WW');
        if (!grouped[localTime]) {
          grouped[localTime] = [];
        }
        grouped[localTime].push(prediction);

        return grouped;
      }, {});

      return Object.values(days);
    };

    const fullForecast = groupPredictions(data.forecast.list);

    const daily = {
      tag: 'div',
      className: 'col-lg-5',
      c: [
        {
          tag: 'div',
          className: 'days',
          id: 'dailyCards',
          c: [
            ...fullForecast.map((card, i) => ({
              tag: 'div',
              className: 'mt-5 d-flex flex-column justify-content-center align-items-stretch',
              c: [{
                tag: 'h4',
                className: 'h4 text-center',
                textContent: setTime(card[0].dt, tz, 'DD WW'),
              },
              {
                tag: 'table',
                className: 'table align-middle id-day-table',
                c: [
                  {
                    tag: 'thead',
                    c: [
                      {
                        tag: 'tr',
                        c: [
                          {
                            tag: 'th',
                            c: [
                              {
                                tag: 'div',
                                className: 'my-2 mx-auto time',
                              }
                            ],
                          },
                          {
                            tag: 'th',
                            c: [
                              {
                                tag: 'div',
                                className: 'my-2 mx-auto clouds',
                              }
                            ],
                          },
                          {
                            tag: 'th',
                            c: [
                              {
                                tag: 'div',
                                className: 'my-2 mx-auto thermometer',
                              }
                            ],
                          },
                          {
                            tag: 'th',
                            c: [
                              {
                                tag: 'div',
                                className: 'my-2 mx-auto pressure',
                              }
                            ],
                          },
                          {
                            tag: 'th',
                            c: [
                              {
                                tag: 'div',
                                className: 'my-2 mx-auto humidity',
                              }
                            ],
                          },
                          {
                            tag: 'th',
                            c: [
                              {
                                tag: 'div',
                                className: 'my-2 mx-auto wind',
                              }
                            ],
                          },
                        ],
                      },
                    ]
                  },
                  {
                    tag: 'tbody',
                    c: [
                      ...card.map((item) => ({
                        tag: 'tr',
                        c: [
                          {
                            tag: 'td',
                            c: [
                              {
                                tag: 'span',
                                className: 'm-1 text-nowrap',
                                textContent: setTime(item.dt, tz, 'hh:mm'),
                              }
                            ],
                          },
                          {
                            tag: 'td',
                            c: [
                              {
                                tag: 'div',
                                className: 'm-2 d-flex flex-column align-items-center justify-content-center',
                                c: [
                                  {
                                    tag: 'img',
                                    className: 'icon',
                                    src: item.weather[0].icon,
                                  },
                                  {
                                    tag: 'span',
                                    className: 'text-center small',
                                    textContent: item.weather[0].description,
                                  },
                                ]
                              }
                            ],
                          },
                          {
                            tag: 'td',
                            c: [
                              {
                                tag: 'div',
                                className: 'm-2 d-flex flex-column justify-content-center align-items-center',
                                c: [
                                  {
                                    tag: 'span',
                                    className: 'fs-4',
                                    innerHTML: `${k2c(item.main.temp)} &#8451`,
                                  },
                                  {
                                    tag: 'span',
                                    className: 'small text-nowrap',
                                    innerHTML: `Feels like: ${k2c(item.main.feels_like)}&deg;`,
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            tag: 'td',
                            c: [
                              {
                                tag: 'span',
                                className: 'm-2 fs-6 text-nowrap',
                                textContent: `${item.main.pressure} hPa`,
                              }

                            ]
                          },
                          {
                            tag: 'td',
                            c: [
                              {
                                tag: 'span',
                                className: 'm-2 fs-6 text-nowrap',
                                textContent: `${item.main.humidity} %`,
                              }
                            ]
                          },
                          {
                            tag: 'td',
                            c: [
                              {
                                tag: 'div',
                                className: 'm-2 d-flex flex-column align-items-center justify-content-center',
                                c: [
                                  {
                                    tag: 'span',
                                    className: 'small text-nowrap',
                                    textContent: `${item.wind.speed} m/s`,
                                  },
                                  {
                                    tag: 'span',
                                    className: 'small text-nowrap',
                                    textContent: `${item.wind.deg} deg`,
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      })),
                    ],
                  },
                ],
              },
              i === 0 || fullForecast.length - 1 === i ? '' : {
                tag: 'button',
                className: 'btn  id-day-btn',
                textContent: 'see more...',
              }
              ],
            })),
          ],
        },
      ],
    };

    return daily;
  };

  return {
    forecastPage(data) {
      const current = data.weather;
      const tz = current.timezone;
      const page = {
        tag: 'div',
        className: 'row',
        id: 'forecastPage',
        c: [
          {
            tag: 'div',
            className: 'col-lg-5',
            c: [
              {
                tag: 'div',
                className: 'ui-right-panel col-lg-5',
                c: [
                  {
                    tag: 'div',
                    className: 'm-5 form-group',
                    c: [
                      {
                        tag: 'div',
                        className: 'd-flex align-items-center',
                        c: [
                          {
                            tag: 'input',
                            type: 'text',
                            className: 'fs-4 form-control mx-1',
                            id: 'cityInput',
                            placeholder: 'City name',
                          },
                          {
                            tag: 'button',
                            type: 'submit',
                            className: 'fs-4 btn btn-primary mx-1',
                            id: 'submitBtn',
                            textContent: 'Ok',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    tag: 'div',
                    className: 'my-2 d-flex flex-wrap justify-content-center',
                    id: 'cityLocationInfo',
                    c: [
                      {
                        tag: 'span',
                        className: 'h4 mx-1',
                        textContent: `${data.common.name}`,
                      },
                      data.common.state ? {
                        className: 'h4',
                        tag: 'span',
                        textContent: `${data.common.state}`,
                      } : '',
                      {
                        tag: 'span',
                        className: 'h4 mx-1',
                        textContent: `${data.common.country}`,
                      },
                    ],
                  },
                  {
                    tag: 'div',
                    className: 'd-flex flex-column align-items-center',
                    c: [
                      {
                        tag: 'time',
                        className: 'h5 my-1',
                        id: 'date',
                        textContent: setTime(current.dt, tz, 'WW, MM DD'),
                      },
                      {
                        tag: 'time',
                        className: 'h5 my-1',
                        id: 'time',
                        textContent: setTime(current.dt, tz, 'hh:mm'),
                      },
                    ],
                  },
                  {
                    tag: 'div',
                    className: 'd-flex flex-column align-items-center',
                    c: [
                      {
                        tag: 'div',
                        className: 'crop-borders',
                        c: [
                          {
                            tag: 'img',
                            className: 'img-scale',
                            id: 'skyImg',
                            src: current.weather[0].icon,
                          },
                        ],
                      },
                      {
                        tag: 'span',
                        className: 'h4',
                        id: 'sky',
                        textContent: `${current.weather[0].description}`,
                      },
                    ],
                  },
                  {
                    tag: 'div',
                    className: 'my-4 d-flex flex-column align-items-center',
                    c: [
                      {
                        tag: 'span',
                        className: 'h5',
                        innerHTML: `feels like: ${k2c(
                          current.main.feels_like,
                        )} &#8451`,
                      },
                      {
                        tag: 'span',
                        className: 'h1 icon-thermometer',
                        innerHTML: `${k2c(current.main.temp)} &#8451`,
                      },
                      {
                        tag: 'span',
                        className: 'h5',
                        innerHTML: `min: ${k2c(current.main.temp_min)}&#8451 max: ${k2c(current.main.temp_max)}&#8451`,
                      }
                    ],
                  },
                  {
                    tag: 'div',
                    className: 'my-4 d-flex flex-row flex-wrap justify-content-center align-items-center',
                    c: [
                      {
                        tag: 'span',
                        className: 'h5 icon-pressure',
                        id: 'pressure',
                        textContent: `${current.main.pressure} hPa`,
                      },
                      {
                        tag: 'span',
                        className: 'h5 icon-humidity',
                        id: 'humidity',
                        textContent: `${current.main.humidity} %`,
                      },
                      {
                        tag: 'span',
                        className: 'd-flex flex-row align-items-center',
                        c: [
                          {
                            tag: 'span',
                            className: 'icon-wind ',
                          },
                          {
                            tag: 'span',
                            className: 'd-flex flex-column align-items-center',
                            c: [
                              {
                                tag: 'span',
                                className: 'h6',
                                id: 'windSpeed',
                                textContent: `${current.wind.speed} m/s`,
                              },
                              {
                                tag: 'span',
                                className: 'h6',
                                id: 'deg',
                                textContent: `${current.wind.deg} deg.`,
                              },
                            ],
                          },
                        ]
                      },
                    ],
                  },
                  {
                    tag: 'div',
                    className: 'my-5 d-flex flex-row justify-content-center align-items-center',
                    c: [
                      {
                        tag: 'div',
                        className: 'mx-5 d-flex flex-column align-items-center',
                        c: [
                          {
                            tag: 'div',
                            className: 'icon-sunrise ',
                          },
                          {
                            tag: 'time',
                            className: 'h4',
                            id: 'sunrise',
                            textContent: `${setTime(current.sys.sunrise, tz, 'hh:mm')}`,
                          },
                        ],
                      },
                      {
                        tag: 'div',
                        className: 'mx-5 d-flex flex-column align-items-center',
                        c: [
                          {
                            tag: 'div',
                            className: 'icon-sunset ',
                          },
                          {
                            tag: 'time',
                            className: 'h4',
                            id: 'sunset',
                            textContent: `${setTime(current.sys.sunset, tz, 'hh:mm')}`,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          dailyCard(data),
        ]
      };

      return uiCreate.node(page);
    },

    manualInput() {
      const model = {
        tag: 'div',
        className: 'd-flex flex-row justify-content-center align-items-center ui-fullscreen ui-padding',
        id: 'manualInput',
        c: [
          {
            tag: 'input',
            type: 'text',
            placeholder: 'City name',
            className: 'fs-4 form-control mx-1',
            id: 'cityInput',
          },
          {
            tag: 'button',
            className: 'fs-4 btn btn-primary',
            id: 'submitBtn',
            textContent: 'Ok',
          },
        ],
      };

      return uiCreate.node(model);
    },

    citiesList(data) {
      const list = {
        tag: 'div',
        className: 'd-flex flex-column justify-content-center align-items-center ui-fullscreen ui-fixed ui-zindex-1',
        id: 'citiesList',
        c: [
          {
            tag: 'div',
            className: 'd-flex flex-column justify-content-center align-items-center ui-fullscreen ui-fixed ui-primary-bg',
            id: 'backdrop',
          },
          {
            tag: 'ul',
            className: 'list-group fw-bold text-center',
            c: [
              ...data.map((city) => ({
                tag: 'li',
                className: 'mb-2 list-group-item d-flex justify-content-between align-items-center',
                c: [
                  {
                    tag: 'button',
                    className: 'p-2 btn btn-light text-decoration-none p-0 border-0 cities',
                    textContent: `${city.name}, ${city.state ? `${city.state}, ` : ''}${city.country}`,
                  },
                  {
                    tag: 'span',
                    className: 'mx-3',
                    textContent: 'Coords: ',
                    c: [
                      {
                        tag: 'a',
                        className: 'btn btn-link',
                        textContent: `${city.lat}, ${city.lon}`,
                        href: `https://www.google.com/maps?q=${city.lat},+${city.lon}`,
                        target: '_blank',
                      },
                    ],
                  },
                ],
              })),
            ],
          },
          {
            tag: 'button',
            className: 'btn btn-secondary ui-zindex-1',
            id: 'cancel',
            textContent: 'Cancel',
          },
        ],
      };

      return uiCreate.node(list);
    },

    errorMessage(text) {
      const model = {
        tag: 'span',
        className: 'error-container bg-danger text-white position-absolute p-2 rounded',
        textContent: text,
      };

      return text === '' || text === undefined ? '' : uiCreate.node(model);
    },
  };
};

export default contentCreator;
