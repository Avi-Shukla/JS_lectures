'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient,...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

//Lecture 3  The spread operator
/*const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[3]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables are arrays, strings, maps, sets. NOT objects

const str = 'Avi';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
//  console.log(`${...str} SHukla`); DOESNT WORK IN TEMPLATE LITERALS

//Real world example
// const ingredients = [
//   prompt('Let/s make pasta! Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Objects
/*const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guissepe' };
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

//Lecture 2 Destructuring objects
/*
restaurant.orderDelivery({
  time:'22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex:2,
});

restaurant.orderDelivery({
  address: 'Via del sole, 21',
  starterIndex:1
})

const {name,openingHours, categories} = restaurant;
console.log(name, openingHours,categories);

const{name: restaurantName, openingHours: hours, categories:tags} = restaurant;
console.log(restaurantName,hours,tags);

const {menu = [], starterMenu: starters= []} = restaurant;
console.log(menu,starters);

//Mutating variables

let a = 111;
let b = 999;
const obj = {a :23, b:7, c:14};
({a,b} = obj);
console.log(a,b);

//nested objects

const {fri:{open: o, close: c}} = openingHours;
console.log(o, c); 
*/

//Lecture 1 Destructuring Arrays
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary= temp;
// console.log(main,secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);
console.log(restaurant.order(2, 0));

//Recieve 2 values from a function
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);

const nested = [ 2,4,[5,6]];
// const [i,,j]= nested;
// console.log(i,j);
const [i, ,[j,k]]= nested;
console.log(i,j,k);

//Default values
const [p=1,q=1,r=1]=[8,9];
console.log(p,q,r);
*/

//Lecture 3 The rest patterns

//Destructuring 
//Spread, because of the right side of= 
/*const arr = [1,2, ...[3,4]];

const [a,b,...others]= [1,2,3,4,5];
console.log(a,b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

//Objects
const {sat, ...weekdays}= restaurant.openingHours;
console.log(weekdays);
//Funtions
const add = function(...numbers){
  let sum = 0;
  for(let i = 0; i<numbers.length;i++) sum+=numbers[i];
  console.log(sum);
}
add(2,3)
add(5,3,7,2)
add(4,23,44,45,3,44)

const x = [23,5,7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion' ,'salt', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/




//Lecture 4 Short Circuiting (&& and ||)
/*
//Use ANY datatype, return any datatype , short-circuiting
console.log(3 || 'Avi');
console.log('' || 'Avi');
console.log(true||0);
console.log(undefined || null);


console.log(undefined || 0 || "" || "avi" || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests:10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10
console.log(guests2);

console.log('---------And------------');

console.log(0 && 'Avi');
console.log(7 && "avi");

console.log('Hello' && 23 && null && 'Jonas');

//Practical example

if(restaurant.orderPizza){
  restaurant.orderPizza('Mushrooms', 'Spinach');
}
*/
