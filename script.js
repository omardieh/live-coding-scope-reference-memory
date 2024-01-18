// console.log("test");
// const globalScopeVariable = "Hello from global scope";

// const functionScope = () => {
//     const variableInsideFunctionScope = "Hello from function scope";
// }
// if (true) {
//     const blockScope = "Hello from block scope";
// }

// function example() {
//   var x = 1;
//   let y = 2;
//   const z = 3;
//   if (true) {
//     var x = 10;
//     let y = 20;
//     const z = 30;
//     // console.log(x); // 10;
//     // console.log(y); // 20;
//     // console.log(z); // 3 | error | 30
//   }
//   console.log(x); // 1;
//   console.log(y); // 2;
//   console.log(z); // 3;
// }
// example();

// global scope
// const message = "Hello from the global scope!";

// function sayHelloFromLocalScope() {
//   console.log(message);

//   // function scope
//   const greeting = "Hello from functional/local scope!";
//   return greeting;
// }
// sayHelloFromLocalScope();
// console.log(message);
// console.log(greeting);

// let outerVar = 1;

// function inner() {
//   let innerVar = 2;
//   console.log(outerVar);
// }

// console.log(innerVar); // => ReferenceError: innerVar is not defined

// for (var i = 1; i <= 5; i++) {
//   console.log(`Iteration number: ${i}`);
// }

// console.log(`After the loop: ${i}`);

// [...]
// Iteration number: 28
// Iteration number: 29
// Iteration number: 30
// After the loop 31

// var message = "Hello from the global scope!";
// var message = "This is the second message.";
// let message = "Hello from the global scope!";
// message = "This is the second message.";
// console.log(message);

// let globalVariable = "I am a global variable";
// function myFunction() {
//   // Function scope variable
//   let functionVariable = "I am a function variable";
//   if (true) {
//     // Block scope variable
//     let blockVariable = "I am a block variable";
//     console.log(blockVariable); // I am a block variable;
//   }
//   console.log(functionVariable); // I am a function variable
//   console.log(globalVariable); // I am a global variable
// }
// myFunction();
// console.log(globalVariable); // I am a global variable

// let name = "Ironhacker";
// if (true) {
//   let name = "Ted";
//   console.log(`Name inside if statement: ${name}`);
// }
// console.log(`Name outside if statement: ${name}`);

// const name; // <== WRONG!
// name = 'John'; // <== this doesn't work

// let name; // <== WRONG!
// name = 'John'; // <== this doesn't work

// const obj = {};
// obj.name = 'Ironhacker';
// // error =>
// obj = { name: 'Ironhacker' };

// console.log(message); // => undefined
// var message = "Hello from the global scope!";

// sayHello();

// const sayHello = () => {
//   console.log("Hello there!");
// };

// function sayHello() {
//   console.log("Hello there!");
// }

// let a = 1;
// let b = 2;

// function inner() {
//   a = 4; // reassigned
//   let b = 3; // declared in an inner scope
// }

// inner();
// console.log(a); // => 4
// console.log(b); // => 2

// const a = "1";
// const b = "1";
// console.log(a === b); // true
// const c = [1];
// const d = [1];
// console.log(c === d); // true
// let text = "";
// // text = "a"
// // text == "a"
// // text === "a"

// let price1 = 20.99;
// let price2 = price1;
// console.log(price1 === price2); // => true

// const book1 = {
//   author: "Charlotte Bronte",
// };

// const book2 = book1;
// console.log(book1); // => { author: 'Charlotte Bronte' }
// console.log(book2); // => { author: 'Charlotte Bronte' }
// book1.author = "Jane Austen";

// console.log(book1);
// console.log(book2);

//   book2.author = 'Edith Wharton';

//   // BOTH ARE CHANGED
//   console.log(book1); // => { author: 'Edith Wharton' }
//   console.log(book2); // => { author: 'Edith Wharton' }

// object:
// const book1 = {
//   author: "Charlotte Bronte",
// };
// const book2 = book1;
// console.log(book1 === book2); // => true

// const book3 = {
//   author: "Charlotte Bronte",
// };

// const book4 = {
//   author: "Charlotte Bronte",
// };
// // [] === []
// // {} === {}

// console.log(book3 === book4); // => false

// const book1 = {
//   author: "Charlotte Bronte",
// };

// const book2 = Object.assign({}, book1);
// book1.author = "new Name";
// console.log(book1, book2); // => { author: "Charlotte Bronte" }
// // console.log(book1 === book2); // => false

// const book1 = {
//   author: "Charlotte Bronte",
//   publishers: [{ companyName: "AB" }, { companyName: "CD" }],
// };

// const book3 = Object.assign({}, book1);

// book1.publishers[0] = {
//   companyName: "Super Cool Company", // => here we changed the name of
//   // the 1st publisher in the original (book1)
// };

// book1.author = "Test Test"; // => here we changed the author name in the original (book1)

// console.log(JSON.stringify(book3.publishers));
// console:
//  { author: 'Charlotte Bronte', // => THIS DIDN'T CHANGE
//    publishers: [
//        { companyName: 'Super Cool Company' }, // => THIS IS CHANGED SINCE IT'S COPIED BY REFERENCE
//        { companyName: 'CD' }
//    ]
//  }

// const book1 = {
//   author: "Charlotte Bronte",
// };

// const book1Copy = JSON.parse(JSON.stringify(book1));

// const book4 = {}; // => INITIALIZED EMPTY OBJECT

// for (let prop in book1) {
//   book4[prop] = book1[prop];
// }

// book1.author = "William Shakespeare"; // => changed the original

// console.log(book1); // => { author: 'William Shakespeare' } ==> changed
// console.log(book4);

// const book1 = {
//   author: "Charlotte Bronte",
//   publishers: [
//     (publisher1 = {
//       companyName: "AB",
//     }),
//     (publisher2 = {
//       companyName: "CD",
//     }),
//   ],
// };
// const objExample = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 3,
//         f: 4,
//         h: {
//             g: {

//             }
//         }
//     }
// }
// function cloneObject(object) {
//   let clone = {};
//   for (let prop in object) {
//     if (object[prop] != null && typeof object[prop] == "object") {
//       clone[prop] = cloneObject(object[prop]);
//     } else {
//       clone[prop] = object[prop];
//     }
//   }
//   return clone;
// }

// let book4 = cloneObject(book1); // call the function and create the copy => book4

// book1.publishers[0] = {
//   companyName: "Super Cool Company", // => change the deep property of the book1
// };
// book1.author = "William Shakespeare"; // change the property of the book1
// console.log(book1);
// console.log(book4);

// function countDown(number) {
//   if (number === 0) {
//     console.log("count is done");
//     return;
//   }
//   console.log(number);
//   countDown(number - 1);
// }
// countDown(5);

// const book1 = {
//   author: "Charlotte Bronte",
//   publishers: [{ companyName: "AB" }, { companyName: "CD" }],
// };

// const book5 = JSON.parse(JSON.stringify(book1)); // => create the copy: book5

// book1.publishers[0] = {
//   companyName: "Super Cool Company", // => change the deep property of the book1
// };
// book1.author = "William Shakespeare"; // change the property of the book1
// console.log(JSON.stringify(book1.publishers));
// console.log(JSON.stringify(book5.publishers));

// const students = ["Ana", "John", "Fabio"];
// const ironhackers = [].concat(students);
// students.push("Sandra");
// console.log(students);
// console.log(ironhackers);

// const cities = ["Berlin", "London"];
// // const citiesWithRome = [...cities, "Rome"];
// const citiesWithRome = ["Rome", ...cities];
// console.log(citiesWithRome);

// const book = {
//   author: "Charlotte Bronte",
//   pages: 200,
// };
// const theSameBook = { ...book, pages: 400 };
// console.log(theSameBook);

// const book = {
//   author: "Charlotte Bronte",
//   pages: 400,
//   publishers: [
//     {
//       name: "publisher1",
//     },
//     {
//       name: "publisher2",
//     },
//   ],
// };

// const author = book.author;
// const pages = book.pages;

// const { author, pages, publishers } = book;
// // console.log(author, pages, publishers);

// const cities = ["Berlin", "Rome", "London"];
// const berlin = cities[0];
// // const rome = cities[1];
// const london = cities[2];
// const [_, rome] = cities;
// console.log(rome);
// console.log(cities[cities.length - 1]);
// const {author, pages} = book;

// console.log("start");
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log("end");

// console.log("start");
// setTimeout(() => {
//   console.log("run after 3 seconds");
// }, 3000);
// console.log("end");

// const runTime = function () {
//   timeText.innerHTML = initialTime;
//   setTimeout(runTime, 1000);
//   initialTime++;
// };
// let timeoutId = setTimeout(runTime, 1000);
// button.addEventListener("click", () => {
//   console.log("click");
//   clearTimeout(timeoutId);
//   clearTimeout(runTime);
// });

const timeText = document.querySelector("#time-text");
const button = document.querySelector("#stop-timer-button");
let initialTime = 0;

let timeoutID = setTimeout(() => {
  timeText.innerHTML = "Hello World!";
}, 5000);

// let intervalID = setInterval(() => {
//   timeText.innerHTML = initialTime;
//   initialTime++;
// }, 1000);

button.addEventListener("click", () => {
  // clearInterval(intervalID);
  clearTimeout(timeoutID);
});
