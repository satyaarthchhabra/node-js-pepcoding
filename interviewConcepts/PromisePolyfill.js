function Mypromise() {}
const oupromise = new Promise((resolve, reject) => {
  resolve(100000000000);
});
oupromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// them
// catch
// resolve
// reject
class Mypromise {
  // executor
  resolvedData;
  isResolved;

  constructor(callback) {
    callback(resolve, reject);
  }
  //   resolve
  resolve = function (value) {
    resolvedData = value;
  };
}
