'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `Oh, and youre a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
// //         return a + b;
// //       }
// //       output = 'New Output';
// //     }
// //     // console.log(add(2, 3));
// //     console.log(millenial);
// //     console.log(output);
// //   }
// //   printAge();

// //   return age;
// // }

// // // const firstName = 'Avi';
// // // calcAge(1991);

// // //Hoistimg with variables
// // // console.log(me);
// // // // console.log(job);
// // // console.log(year);
// // // var me = 'Avi';
// // // let job = 'teacher';
// // // const year = 2005;

// // //hoisting with functions
// // // console.log(addDecl(2, 3));
// // // // console.log(addExpr(2, 3));
// // // console.log(addArrow(2, 3));

// // // function addDecl(a, b) {
// // //   return a + b;
// // // }

// // // const addExpr = function (a, b) {
// // //   return a + b;
// // // };

// // // var addArrow = () => a + b;

// // //Example
// // console.log(undefined);
// // if (!numProducts) deleteShoppingcart();

// // var numProducts = 10;

// // function deleteShoppingcart() {
// //   console.log('All products deleted');
// // }

// // var x = 1;
// // let y = 2;
// // const z = 3;

// // console.log(x === window.x);
// // console.log(y === window.x);
// // console.log(z === window.x);

// //This keyword
// // console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1931);

// const avi = {
//   year: 2005,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// // avi.calcAge();

// // const matilda= {
// //       year: 2017,
// // }
// // matilda.calcAge = avi.calcAge;
// // matilda.calcAge()

// // const f= avi.calcAge;
// // f();

// const jonas = {
// //   firstName: 'Jonas',
// //   year: 1991,
// //   calcAge: function () {
// //     console.log(this);
// //     console.log(2037 - this.year);
// //   },
// //   greet: () => console.log(`Hey ${this.firstName}`),
// // };
// // jonas.greet();
// console.log(this.firstName);

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me={
//   name: 'avi',
//   age: 30,
// };
// const friend= me;
// friend.age=27;
// console.log('Friend:', friend);
// console.log('Me', me);

//primtive types
let lastName = 'Williams';
let oldlastName = lastName;
lastName = 'davis';
console.log(lastName, oldlastName);
//refrence types
const jessica = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'davis';
console.log('before marriage', jessica);
console.log('aftr marriage', marriedJessica);

//copying objects
const jessica2 = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Beore marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);