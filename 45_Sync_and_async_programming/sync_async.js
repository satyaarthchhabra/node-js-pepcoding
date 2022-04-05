function greet(name) {
  let msg = "Hello" + name;
  console.log(msg);
}
function greet(name, cb) {
  let msg = "Hello" + name;
  cb(msg);
}

function logGreeting(greeting) {
  console.log(greeting);
}

greet("Pepcoder", logGreeting);
console.log("Hello");

setTimeout(function st1() {
  console.log("I'm ST1");
}, 2000);

setTimeout(function st2() {
  console.log("I'm ST2");
}, 1000);

function sayBye() {
  console.log("Bye");
}

sayBye();
