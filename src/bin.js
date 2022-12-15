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
