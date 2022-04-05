let obj = {
  name: "hello",
  phone: "123",
  address: {
    city: "delhi",
    state: "uk",
    country: "United",
  },
};

const flatten = (obj, parent, res = {}) => {
  for (const key in obj) {
    let propname = parent ? `${parent}_${key}` : key;
    if (typeof obj[key] === "object") {
      flatten(obj[key], propname, res);
    } else {
      res[propname] = obj[key];
    }
  }
  return res;
};
console.log(flatten(obj));
console.log(typeof null);
