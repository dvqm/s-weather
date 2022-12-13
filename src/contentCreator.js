import uiCreator from './uiCreator';

const uiCreate = uiCreator();

const contentCreator = () => {
  const getRef = (name, obj) => {
    let result;

    const nameSearch = (prop) => {
      if (name in prop) result = prop[name];

      Object.values(prop).forEach((value) => {
        if (typeof value === 'object') return nameSearch(value);
        return result;
      });
    };
    nameSearch(obj);

    return result;
  };

  const k2c = (temp) => {
    const kelvin = -273.16;

    const celsium = Math.round(temp + kelvin);

    return celsium;
  };

  const add0 = (date, prop) => {
    const with0 = `0${date[prop]()}`.slice(-2);
    return with0;
  };

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
      const temp = '<sup>0</sup>C,';

      const card = {
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
            innerHTML: `${k2c(ticket.temp)} ${temp}`,
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

      hourly.c.wrapper.c[`h${i + 1}`] = card;
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
      const degIcon = '<sup>0</sup>';

      const card = {
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
                innerHTML: `${k2c(ticket.temp.morn)} ${degIcon}`,
              },
              day: {
                tag: 'span',
                innerHTML: `${k2c(ticket.temp.day)} ${degIcon}`,
              },
              evening: {
                tag: 'span',
                innerHTML: `${k2c(ticket.temp.eve)} ${degIcon}`,
              },
              night: {
                tag: 'span',
                innerHTML: `${k2c(ticket.temp.night)} ${degIcon}`,
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

      daily.c.wrapper.c[`d${i + 1}`] = card;
    });

    return daily;
  };

  return {
    forecastPage(data) {
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
              cityName: {
                tag: 'span',
                textContent: `${data.name} ${data.country}`,
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
                    src: data.weather.icon,
                  },
                  sky: {
                    tag: 'span',
                    id: 'sky',
                    textContent: `${data.weather.description}`,
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
                        textContent: k2c(data.main.temp),
                      },
                      feelsLike: {
                        tag: 'span',
                        id: 'feelsLike',
                        textContent: `feels like: ${k2c(data.main.feels_like)}`,
                      },
                      minimal: {
                        tag: 'span',
                        id: 'minimal',
                        textContent: `min: ${k2c(data.main.temp_min)}`,
                      },
                      maximal: {
                        tag: 'span',
                        id: 'maximal',
                        textContent: `max: ${k2c(data.main.temp_max)}`,
                      },
                    },
                  },
                  measure: {
                    tag: 'span',
                    className: 'measure',
                    innerHTML: '<sup>0</sup>C',
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
                    textContent: `${data.main.pressure} hPa`,
                  },
                  humidity: {
                    tag: 'span',
                    id: 'humidity',
                    textContent: `${data.main.humidity} %`,
                  },
                  windSpeed: {
                    tag: 'span',
                    id: 'windSpeed',
                    textContent: `${data.wind.speed} m/s`,
                  },
                  deg: {
                    tag: 'span',
                    id: 'deg',
                    textContent: `${data.wind.deg} deg.`,
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
                        textContent: convertTime(data.sys.sunrise, 'hm'),
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
                        textContent: convertTime(data.sys.sunset, 'hm'),
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
        c: {
          ul: {
            tag: 'ul',
            className: 'list',
            c: {},
          },
          backLayer: {
            tag: 'div',
            className: 'backLayer',
          },
        },
      };

      data.forEach((city, index) => {
        const state = city.state ? `${city.state}, ` : '';

        const li = {
          tag: 'li',
          c: {
            city: {
              tag: 'span',
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

        list.c.ul.c[index] = li;
      });

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
