let a = {
  b: 5,
  k: () => {
    console.log(this);
  },
};
a.k();
