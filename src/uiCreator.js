const uiCreator = () => {
  const assemble =
    (node) =>
    (...handlers) =>
      [...handlers].reduce((prev, next) => next(prev), node);

  return {
    assemble,
    node(ui) {
      if (Object.keys(ui).length === 0) return '';

      const element = structuredClone(ui);

      const { tag } = element;

      const parent = document.createElement(tag);

      Object.entries(element).forEach((prop) => {
        const [key, value] = prop;

        if (key !== 'tag' || key !== 'c' || key !== 's') parent[key] = value;
        if (key.includes('data-')) parent.setAttribute(key, value);
        if (key === 'required' && value === 'false')
          parent.removeAttribute(key);
      });

      const blank = structuredClone(ui);

      if (blank.c) {
        const { c } = blank;

        Object.values(c).forEach((block) => {
          parent.append(uiCreator().node(block));
        });
      }

      return parent;
    },

    render(pointer, ...nodes) {
      pointer.append(...nodes);
    },
  };
};

export default uiCreator;
