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

  return {
    mainPage(blank, data) {
      const setDateTime = () => {
        const d = new Date();

        const { date } = getRef('currentDate', blank).c;

        const { time } = getRef('currentDate', blank).c;

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

        const days = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ];

        date.textContent = `
      ${d.getDate()} 
      ${mNames[d.getMonth()]} 
      ${d.getFullYear()}
      `;

        time.textContent = `
      ${days[d.getDay()]} 
      ${add0(d, 'getHours')} : 
      ${add0(d, 'getMinutes')}
      `;
      };

      setDateTime();

      const city = getRef('cityName', blank);

      city.textContent = `${data.name} ${data.country}`;

      const skyImg = getRef('skyImg', blank);

      skyImg.src = data.weather.icon;

      skyImg.alt = data.weather.description;

      const sky = getRef('sky', blank);

      sky.textContent = data.weather.description;

      const current = getRef('current', blank);

      current.textContent = k2c(data.main.temp);

      const t = getRef('temperatures', blank).c;

      t.feelsLike.textContent = `feels like: ${k2c(data.main.feels_like)}`;

      t.minimal.textContent = `min: ${k2c(data.main.temp_min)}`;

      t.maximal.textContent = `max: ${k2c(data.main.temp_max)}`;

      const o = getRef('otherData', blank).c;

      o.humidity.textContent = `${data.main.humidity} %`;

      o.pressure.textContent = `${data.main.pressure} hPa`;

      o.windSpeed.textContent = `${data.wind.speed} m/s`;

      o.deg.textContent = `${data.wind.deg} deg.`;

      const sun = getRef('sun', blank).c;

      sun.sunrise.c.time.textContent = convertTime(data.sys.sunrise, 'hm');

      sun.sunset.c.time.textContent = convertTime(data.sys.sunset, 'hm');

      return blank;
    },
    hourlyCard(data) {
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
    },
    dailyCard(data) {
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

      return uiCreate.node(daily);
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
