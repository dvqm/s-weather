import uiCreator from './uiCreator';

const contentCreator = () => {
  const uiCreate = uiCreator();

  const k2c = (temp) => {
    const kelvin = -273.16;

    return Math.round(temp + kelvin);
  };

  const add0 = (date, prop) => `0${date[prop]()}`.slice(-2);

  const convertTime = (seconds, type) => {
    const date = new Date(seconds * 1000);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let string = '';

    if (type.includes('d')) string += `${add0(date, 'getDate')}`;

    if (type.includes('w')) string += ` ${days[date.getDay()]}`;

    if (type.includes('wh')) string += ' ';

    if (type.includes('h')) string += `${add0(date, 'getHours')}`;

    if (type.includes('m')) string += ` : ${add0(date, 'getMinutes')}`;

    if (type.includes('s')) string += ` : ${add0(date, 'getSeconds')}`;

    return string;
  };

  const setDate = () => {
    const d = new Date();

    const mNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    return `
      ${d.getDate()} 
      ${mNames[d.getMonth()]} 
      ${d.getFullYear()}
      `;
  };

  const setTime = () => {
    const d = new Date();

    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return `
      ${days[d.getDay()]} 
      ${add0(d, 'getHours')} : 
      ${add0(d, 'getMinutes')}
      `;
  };

  const hourlyCard = (data) => {
    const hourly = {
      tag: 'div',
      className: 'hourly dispRow',
      c: {
        previous: {
          tag: 'button',
          id: 'hourlyPrev',
          className: 'prevBtn',
        },
        wrapper: {
          tag: 'div',
          className: 'cards',
          id: 'hourlyCards',
          c: {},
        },
        next: {
          tag: 'button',
          id: 'hourlyNext',
          className: 'nextBtn',
        },
      },
    };

    const { forecast } = data;
    forecast.hourly.forEach((ticket, i) => {
      hourly.c.wrapper.c[`h${i + 1}`] = {
        tag: 'div',
        className: 'card',
        c: {
          hour: {
            tag: 'time',
            textContent: convertTime(ticket.dt, 'whm'),
          },
          icon: {
            tag: 'img',
            src: ticket.weather[0].icon,
            icon: ticket.weather[0].description,
          },
          descr: {
            tag: 'span',
            textContent: ticket.weather[0].main,
          },
          temperature: {
            tag: 'span',
            innerHTML: `${k2c(ticket.temp)} &#8451`,
          },
          pressure: {
            tag: 'span',
            textContent: `${ticket.pressure} hPa`,
          },
          humidity: {
            tag: 'span',
            textContent: `${ticket.humidity} %`,
          },
          windSpeed: {
            tag: 'span',
            textContent: `${ticket.wind_speed} m/s`,
          },
          deg: {
            tag: 'span',
            textContent: `${ticket.wind_deg} deg.`,
          },
        },
      };
    });

    return hourly;
  };

  const dailyCard = (data) => {
    const daily = {
      tag: 'div',
      className: 'daily dispRow',
      c: {
        previous: {
          tag: 'button',
          id: 'dailyPrev',
          className: 'prevBtn',
        },
        wrapper: {
          tag: 'div',
          className: 'cards',
          id: 'dailyCards',
          c: {},
        },
        next: {
          tag: 'button',
          id: 'dailyNext',
          className: 'nextBtn',
        },
      },
    };

    const { forecast } = data;

    forecast.daily.forEach((ticket, i) => {
      daily.c.wrapper.c[`d${i + 1}`] = {
        tag: 'div',
        className: 'card',
        c: {
          date: {
            tag: 'time',
            textContent: convertTime(ticket.dt, 'dw'),
          },
          icon: {
            tag: 'img',
            src: ticket.weather[0].icon,
            alt: ticket.weather[0].description,
          },
          descr: {
            tag: 'span',
            textContent: ticket.weather[0].description,
          },
          sun: {
            tag: 'div',
            className: 'sun',
            c: {
              sunrise: {
                tag: 'time',
                textContent: convertTime(ticket.sunrise, 'hm'),
              },
              sunset: {
                tag: 'time',
                textContent: convertTime(ticket.sunset, 'hm'),
              },
            },
          },
          temperatures: {
            tag: 'div',
            className: 'predict',
            c: {
              morning: {
                tag: 'span',
                innerHTML: `${k2c(ticket.temp.morn)} &#8451`,
              },
              day: {
                tag: 'span',
                innerHTML: `${k2c(ticket.temp.day)} &#8451`,
              },
              evening: {
                tag: 'span',
                innerHTML: `${k2c(ticket.temp.eve)} &#8451`,
              },
              night: {
                tag: 'span',
                innerHTML: `${k2c(ticket.temp.night)} &#8451`,
              },
            },
          },
          otherData: {
            tag: 'div',
            className: 'other',
            c: {
              pressure: {
                tag: 'span',
                textContent: `${ticket.pressure} hPa`,
              },
              humidity: {
                tag: 'span',
                textContent: `${ticket.humidity} %`,
              },
              windSpeed: {
                tag: 'span',
                textContent: `${ticket.wind_speed} m/s`,
              },
              deg: {
                tag: 'span',
                textContent: `${ticket.wind_deg} deg.`,
              },
              uvi: {
                tag: 'span',
                textContent: ticket.uvi,
              },
            },
          },
        },
      };
    });

    return daily;
  };

  return {
    forecastPage(data) {
      const { current } = data.forecast;

      const page = {
        tag: 'div',
        className: 'container',
        c: {
          current: {
            tag: 'div',
            className: 'currentTemp',
            c: {
              cityLabel: {
                tag: 'label',
                className: 'cityLabel',
                c: {
                  cityInput: {
                    tag: 'input',
                    type: 'text',
                    className: 'cityInput',
                    id: 'cityInput',
                  },
                  submitBtn: {
                    tag: 'button',
                    id: 'submitBtn',
                    textContent: 'Ok',
                  },
                },
              },
              cityData: {
                tag: 'div',
                className: 'cityLocationInfo',
                c: {
                  name: {
                    tag: 'span',
                    textContent: `${data.common.name}`,
                  },
                  state: {
                    tag: 'span',
                    textContent: `${data.common.state}`,
                  },
                  country: {
                    tag: 'span',
                    textContent: `${data.common.country}`,
                  },
                },
              },
              currentDate: {
                tag: 'div',
                className: 'time',
                c: {
                  date: {
                    tag: 'time',
                    className: 'date',
                    id: 'date',
                    textContent: setDate(),
                  },
                  time: {
                    tag: 'time',
                    className: 'time',
                    id: 'time',
                    textContent: setTime(),
                  },
                },
              },
              skyWrapper: {
                tag: 'div',
                className: 'sky',
                c: {
                  skyImg: {
                    tag: 'img',
                    id: 'skyImg',
                    src: current.weather[0].icon,
                  },
                  sky: {
                    tag: 'span',
                    id: 'sky',
                    textContent: `${current.weather[0].description}`,
                  },
                },
              },
              tempWrapper: {
                tag: 'div',
                className: 'tempWrapper',
                c: {
                  temperatures: {
                    tag: 'div',
                    className: 'temperatures',
                    c: {
                      current: {
                        tag: 'span',
                        className: 'current',
                        id: 'current',
                        textContent: k2c(current.temp),
                      },
                      feelsLike: {
                        tag: 'span',
                        id: 'feelsLike',
                        textContent: `feels like: ${k2c(current.feels_like)}`,
                      },
                    },
                  },
                  measure: {
                    tag: 'span',
                    className: 'measure',
                    innerHTML: '&#8451',
                  },
                },
              },
              otherData: {
                tag: 'div',
                className: 'otherData',
                c: {
                  pressure: {
                    tag: 'span',
                    id: 'pressure',
                    textContent: `${current.pressure} hPa`,
                  },
                  humidity: {
                    tag: 'span',
                    id: 'humidity',
                    textContent: `${current.humidity} %`,
                  },
                  windSpeed: {
                    tag: 'span',
                    id: 'windSpeed',
                    textContent: `${current.wind_speed} m/s`,
                  },
                  deg: {
                    tag: 'span',
                    id: 'deg',
                    textContent: `${current.wind_deg} deg.`,
                  },
                },
              },
              sun: {
                tag: 'div',
                className: 'sun',
                c: {
                  sunrise: {
                    tag: 'div',
                    className: 'sunrise',
                    c: {
                      name: {
                        tag: 'h4',
                        textContent: 'Sunrise',
                      },
                      time: {
                        tag: 'time',
                        id: 'sunrise',
                        textContent: convertTime(current.sunrise, 'hm'),
                      },
                    },
                  },
                  sunset: {
                    tag: 'div',
                    className: 'sunset',
                    c: {
                      name: {
                        tag: 'h4',
                        textContent: 'Sunset',
                      },
                      time: {
                        tag: 'time',
                        id: 'sunset',
                        textContent: convertTime(current.sunset, 'hm'),
                      },
                    },
                  },
                },
              },
            },
          },
          forecasts: {
            tag: 'div',
            className: 'forecasts',
            c: {},
          },
        },
      };

      if (!data.common.state) delete page.c.current.c.cityData.c.state;

      page.c.forecasts.c.hourly = hourlyCard(data);
      page.c.forecasts.c.daily = dailyCard(data);

      return uiCreate.node(page);
    },

    manualInput() {
      const model = {
        tag: 'label',
        className: 'city',
        c: {
          title: {
            tag: 'span',
            textContent: 'Please, enter a city name',
          },
          cityInput: {
            tag: 'input',
            type: 'text',
            className: 'cityInput',
            id: 'cityInput',
          },
          submitBtn: {
            tag: 'button',
            id: 'submitBtn',
            textContent: 'Ok',
          },
        },
      };

      return uiCreate.node(model);
    },

    citiesList(data) {
      const list = {
        tag: 'div',
        className: 'citiesList',
        c: {
          title: {
            tag: 'h3',
            className: 'title',
            textContent: 'Please choose one of the cities from the list.',
          },
          backLayer: {
            tag: 'div',
            className: 'backLayer',
          },
          ul: {
            tag: 'ul',
            className: 'list',
            c: {},
          },
        },
      };

      data.forEach((city, index) => {
        const state = city.state ? `${city.state}, ` : '';

        list.c.ul.c[index] = {
          tag: 'li',
          c: {
            city: {
              tag: 'span',
              className: 'cities',
              textContent: `${city.name}, ${state}${city.country}`,
            },
            coords: {
              tag: 'span',
              textContent: 'coords: ',
              c: {
                link: {
                  tag: 'a',
                  textContent: `${city.lat}, ${city.lon}`,
                  href: `https://www.google.com/maps?q=${city.lat},+${city.lon}`,
                  target: '_blank',
                },
              },
            },
          },
        };
      });

      list.c.ul.c.cancelBtn = {
        tag: 'li',
        className: 'cancel',
        c: {
          cancel: {
            tag: 'button',
            className: 'button',
            id: 'cancel',
            textContent: 'Cancel',
          },
        },
      };

      return uiCreate.node(list);
    },

    errorMessage(text) {
      const model = {
        tag: 'span',
        className: 'error',
        textContent: text,
      };

      return uiCreate.node(model);
    },
  };
};

export default contentCreator;
