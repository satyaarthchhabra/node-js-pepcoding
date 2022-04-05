function promiseUpdate(a) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    });
  });
}
module.exports = {
  promiseUpdate,
};
