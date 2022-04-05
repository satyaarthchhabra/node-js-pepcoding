console.log("line 1");
setTimeout(() => {
  console.log("line 3");
}, 0);
Promise.resolve().then(() => {
  console.log("line 6");
});
console.log("line 8");
