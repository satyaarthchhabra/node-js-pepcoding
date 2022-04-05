(function immediate(a) {
  return (function immediate(b) {
    console.log(a);
  })(1);
})(0);

let count = 0;
(function immediate() {
  if (count == 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
