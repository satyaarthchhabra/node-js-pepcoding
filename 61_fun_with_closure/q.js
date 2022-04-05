// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }

// solution using letp

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }

// solution without using let

for (var i = 0; i < 5; i++) {
  (() => {
    var j = i;
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })();
}

// let x = 1
// {
//     let x = 4
//     console.log(x)
// }
// {
//     let x = 5
//     console.log(x)
// }
// console.log(x)
