'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense =true;
// if(hasDriversLicense) console.log("I can drive");

// // const interface='Audio';

// function logger() {
//   console.log('My name is Avi');
// }
// //calling/running/invoking
// logger();
// logger();
// logger();


// const appleJuice= fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear){
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(2005);
// console.log(age1)

// const calcAge2 = function (birthYear) {
//   return 2037- birthYear;
// }

// const age2 = calcAge2(2005);
// console.log(age1, age2);

//Arrow func

// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(2005);
// console.log(age3);



// const yearUntilRetirement = birthYear => {
//   const age=2037 - birthYear;
//   const Retirement= 65- age;
//   return Retirement
// }

// function cutFruitPieces(fruit){
// //   return fruit*4
// // }

// // function fruitProcessor(apples, oranges){
// //   const applePieces = cutFruitPieces(apples);
// //   const orangesPieces = cutFruitPieces(oranges);
// //   const juice =`Juice with ${applePieces} apples and ${orangesPieces} oranges`;
// //   return juice;
// // }
// // console.log(fruitProcessor(2,3)); 

// // 
// // }

// // // const yearsUntilRetirement = function (birthYear, firstName){
// // //   const age = calcAge(birthYear);
// // //   const Retirement= 65-age;
// // //   return `${firstName} retires in ${Retirement} years`;
// // // }
// // // console.log(yearsUntilRetirement(2005 , 'Avi'));
// // // console.log(yearsUntilRetirement(2105 , 'Mike'));

// const firends = ['Michael', 'Steven', 'Peter'];
// console.log(firends);

// const year = new Array(1991, 2005, 2006);
// console.log(firends[0]);
// console.log(firends[2]);

// console.log(firends.length);
// console.log(firends[firends.length - 1]);

// firends[2] = 'Jay';
// console.log(firends);

// // firends = ["Bob" ,"Avi"];

// const firstName = "Avi";
// const avi = ['Avi' ,'Shukla', 2037-2005, "teacher", firends];
// console.log(avi);
// console.log(avi.length);

// const calcAge= function(birthYear){
//   return 2037 - birthYear;}

// const years=[1990, 1967,2002,2010, 2018];

// const age1= calcAge(years[0]);
// const age2= calcAge(years[2]);
// const age3= calcAge(years[years.length-1]);
// console.log(age1,age2,age3);

// // const ages = [calcAge(years[0]), calcAge(years[2]),calcAge(years[years.length-1])];
// // console.log(ages);

// //add
// const firends = ['Michael', 'Steven', 'Peter'];
// const newLength= firends.push("Jay");
// console.log(newLength); 

// firends.unshift("John");
// console.log(firends);

// firends.pop();
// const popped =firends.pop();
// console.log(popped);
// console.log(firends);

// firends.shift();
// console.log(firends);

// console.log(firends.indexOf('Steven'));
// console.log(firends.indexOf('Bob'));

// firends.push(23);
// console.log(firends.includes("Steven"));
// console.log(firends.includes("Bob"));
// console.log(firends.includes(23));

// if(firends.includes('Steven')){
//   console.log("You Have A friend named steven");

// }


// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// function calcTip(Bill){
//   if(Bill>=50 && Bill<=300){
//       console.log(`The tip on the bill is ${Bill * (15/100)}`);
//   }
//   else{
//     console.log(`The tip on the bill is ${Bill *(20/100)}`);
//   }
// }
// calcTip(44);

// const bills=[125, 555, 44];
// const tip=[18.75,111,8.8];

// // totals= []

// // const jonas = {
// //   firstName: 'Jonas',
// //   lastName: 'Schmedtmann',
// //   birthYear: 1991,
// //   job: 'teacher',
// //   friends: ['Michael', 'Peter', 'Steven'],
// //   hasDriversLicense: true,

// //   // calcAge: function(birthYear){
// //   //   return 2037 - birthYear;
// //   // }
// //   calcAge: function(){
// //     console.log(this)
// //     return 2037 - this.birthYear;
// //     }
// //   };

// // console.log(jonas.calcAge());

// // // console.log(jonas['calcAge'](2005));

// // console.log(`${jonas.firstName} is a ${jonas.calcAge()}- year old ${jonas.job}, and he has a driver's license`);

// const mark= {
//   fullName: 'Mark Miller',
//   mass:78,
//   height:1.69,

//   calcBMI: function() {
//     this.bmi = this.mass/ this.height ** 2;
//     return this.bmi;
//     }
// }
// const john= {
//   fullName: 'John Smith',
//   mass:92,
//   height:1.95,

//   calcBMI: function() {
//     this.bmi = this.mass/ this.height ** 2;
//     return this.bmi;
//     }
// }

// mark.calcBMI ();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);


// for(let rep=1; rep<=10; rep++){
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven']
//   ];

//   const types=[]; 


//   for(let i=0; i< jonas.length; i++){
//     console.log(jonas[i], typeof jonas[i]);

//     // types[i]= typeof jonas[i];
//     types.push(typeof jonas[i]);
//   };

  // console.log(types);

  // const years =[1991, 2005,2006,2008];
  // const ages=[];

  // for(let i= 0; i<years.length; i++){
  //   ages.push(2037 - years[i]);
  // }
  // console.log(ages);



  // //continue and break
  // console.log('---Only Strings---')
  // for (let i = 0; i < jonas.length; i++) {

  //   if(typeof jonas[i] !== 'string') continue;

  //   console.log(jonas [i], typeof jonas[i]);
  // };

  // console.log('---BREAK WITH NUMBER---')
  // for (let i = 0; i < jonas.length; i++) {

  //   if(typeof jonas[i] === 'number') break;

  //   console.log(jonas [i], typeof jonas[i]);
  // };

//   const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
//     ];

//     for(let i=jonas.length-1; i>=0; i--){
//       console.log(i, jonas[i]);
//     }



  

// for (let excercise=1; excercise<4;excercise++){
//   console.log(`-----Starting excercise ${excercise}`)

//   for(let rep=1; rep<6; rep++){
//     console.log(`Excercise ${excercise} Lifting weight repetition ${rep}`)
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);}


  // let rep =1;
  // while(rep<=10){
  //   console.log(`WHILE: Lifting weights repetition ${rep}`);
  //   rep++;
  // }


// let dice = Math.trunc(Math.random() * 6) + 1;
// while(dice!==6){
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;

//   if(dice===6) console.log('Loop is about to end...');
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 :
  bill * 0.2;
  }
const bills= [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips=[];
const totals=[];

for(let i =0; i<bills.length; i++){
  const tip= calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]); 
}
console.log(bills,tips,totals);

const calcAverage = function(arr){
  let sum = 0;
  for(let i=0;)
}