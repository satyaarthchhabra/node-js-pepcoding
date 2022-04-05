function constructInterval() {
  let id = 0;
  let idMap = {};
  function mySetInterval(cb, delay, ...args) {
    let Id = id++;
    function repeat() {
      idMap[Id] = setTimeout(() => {
        cb(...args);
        if (idMap[Id]) {
          repeat();
        }
      }, delay);
    }
    repeat();
    return Id;
  }
  function myClearInterval(Id) {
    clearTimeout(idMap[Id]);
    delete idMap[Id];
    id--;
  }
  return {
    mySetInterval,
    myClearInterval,
  };
}
const { mySetInterval, myClearInterval } = constructInterval();
let count = 0;
let id = mySetInterval(() => {
  if (count == 5) {
    myClearInterval(id);
  }
  count++;
  console.log("Hello");
}, 1000);
