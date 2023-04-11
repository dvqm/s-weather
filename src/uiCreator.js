const uiCreator = () => {
  const assemble = (node) =>
    (...handlers) =>
      [...handlers].reduce((prev, next) => next(prev), node);


    const render = (operation = 'append') => (pointer, ...nodes) => {
      pointer[operation](...nodes);
    };

  return {
    assemble,
    render,
    node(ui) {
      if (Object.keys(ui).length === 0) return '';

      const element = structuredClone(ui);

      const { tag } = element;

      const parent = document.createElement(tag);

      Object.entries(element).forEach((prop) => {
        const [key, value] = prop;

        if (key !== 'tag' && key !== 'c' && key !== 's') {
          if (key !== 'className'
            && key !== 'id'
            && key !== 'textContent'
            && key !== 'innerHTML'
          ) {
            parent.setAttribute(key, value);
          } else parent[key] = value;
        }
        if (key.includes('data-')) parent.setAttribute(key, value);
        if (key === 'required' && value === 'false')
          parent.removeAttribute(key);
      });

      const blank = structuredClone(ui);

      if (blank.c) {
        const { c } = blank;

        c.forEach((block) => {
          parent.append(uiCreator().node(block));
        });
      }

      return parent;
    },
  };
};

export default uiCreator;
