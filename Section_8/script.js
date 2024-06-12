'use strict';
/*function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} ,You are ${age}, born in ${birthYear}`;
    console.log(output);

    if(birthYear>= 1981 && birthYear<=1996){
      var millenial = true;
      const firstName= "Steven";
      const str = `Oh, and youre an millenial, ${firstName}`;
      console.log(str);

      function add(a,b){
        return a + b;
      } 
      output = "NEW OUTPUT";   
    }
    console.log(millenial);
    console.log(output);
  }

  printAge();
  return age;
}
const firstName = 'Avi';
calcAge(1991);
*/
/*console.log(me);
// console.log(job);
// console.log(year);

var me = 'Avi';
let job = 'Teacher';
const year = 1991;

//Funtions
console.log(addDecl(2, 3));
// console.log(addExp(2,3));
// console.log(addArrow(2,3));

function addDecl(a, b) {
  return a + b;
}
var addExp = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example

console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y)
console.log(z === window.z);
*/

/*console.log(this);

const calcAge = function(birthYear){
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991)

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991)

const jonas = {
  year:1991,
  calcAge: function(){
    console.log(this);
    console.log(2037- this.year);
  }
}
jonas.calcAge();

const matilda = {
  year:2017,
};

matilda.calcAge = jonas.calcAge
matilda.calcAge();

const f = jonas.calcAge;
f();*/
// var firstName = 'Matilda';

/*const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
*/

/*let age = 30;
let oldAge = age;
age= 31;
console.log(age);
console.log(oldAge);

const me = {
  name:'Jonas',
  age : 30,
};
const friend = me;

friend.age= 27;

console.log('Friend:', friend);
console.log('Me', me);*/
//primitive types
/*let lastName = 'Williams';
let oldLastName = lastName;

lastName = "davis";
console.log(lastName, oldLastName);


//refrence types
const jessica  = {
  firstName: 'jessica',
  lastName:'williams',
  age:27,
}
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//copying objects


const jessica2  = {
  firstName: 'jessica',
  lastName:'williams',
  age:27,
  family: ['Alice','Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "davis";
console.log('before marriage:', jessica2);
console.log('after marriage:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
*/
