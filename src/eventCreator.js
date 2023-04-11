const eventCreator = () => ({
  manageRows(node, sets) {
    const {dayBtns, dayTables} = sets;

    const btns = node.querySelectorAll(dayBtns);

    const tablesOrigin = [...node.querySelectorAll(dayTables)].slice(1, -1);

    const tables = [...tablesOrigin];

    const trsStorage = new Map();

    const prepareRows = (nodes) => {
      nodes.forEach((table) => {
        const tbody = table.querySelector('tbody');

        const trs = tbody.querySelectorAll('tr');

        // Store the original trs for this table
        trsStorage.set(table, [...trs]);

        [...trs].forEach((tr, i) => {
          if (i !== 0 && i !== 4) tr.remove();
        });

      });
    }

    prepareRows(tables);

    const rowsManipulation = (i) => {
      const tbody = tables[i].querySelector('tbody');
      return {
        recoveredTrs: trsStorage.get(tablesOrigin[i]),
        tbody: tbody,
        trs: tbody.querySelectorAll('tr'),
      };
    };

    const showRows = (btn, i) => {
      const { recoveredTrs, tbody, trs } = rowsManipulation(i);

      trs.forEach((tr) => tr.remove());

      recoveredTrs.forEach((tr) => {

        tbody.append(tr);
      });

      btn.textContent = '...see less';

      btn.addEventListener('click', () => hideRows(btn, i), { once: true });
    }

    const hideRows = (btn, i) => {
      const { recoveredTrs, tbody, trs } = rowsManipulation(i);

      trs.forEach((tr) => tr.remove());

      recoveredTrs.forEach((time) => {
        const hour = time.firstChild.firstChild;

        hour.textContent === '00:00' || hour.textContent === '12:00' ? tbody.append(time) : ''
      });

      btn.textContent = 'see more...';

      btn.addEventListener('click', () => showRows(btn, i), { once: true });
    };

    btns.forEach((btn, i) =>
      btn.addEventListener('click', () => showRows(btn, i), { once: true }),
    );

    return node;
  },

  cityInput(node, app, sets) {
    const input = node.querySelector(sets.inp);

    const action = () => {
      const cities = document.querySelector('#citiesList');

      if (input.value === '') return;

      if (cities) {
        cities.remove();
      }

      return app(input.value);
    };

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        action();
      }
    });

    if (sets.btn) {
      const btn = node.querySelector(sets.btn);

      btn.addEventListener('click', action);
    }

    return node;
  },

  citiesList(node, list, app) {
    const cancel = () => {
      const input = document.querySelector('#cityInput');

      input.value = '';

      node.remove();
    };

    const cities = node.querySelectorAll('.cities');

    cities.forEach((city, index) => {
      city.addEventListener('click', () => {
        app(list[index]);

        cancel();
      });
    });

    const cancelBtn = node.querySelector('#cancel');

    const backdrop = node.querySelector('#backdrop');

    backdrop.addEventListener('click', cancel);

    cancelBtn.addEventListener('click', cancel);

    document.addEventListener(
      'keydown',
      (event) => {
        if (event.key === 'Escape') {
          cancel();
        }
      },
      { once: true },
    );

    return node;
  },
});

export default eventCreator;
