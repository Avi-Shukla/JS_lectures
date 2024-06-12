"use strict";
// const  calcTempAmplitude= function(temps){   };

const printForecast = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(
      `${i}*C in 1 day...${i[1]}*C in 2 days... ${i[2]}*C in 3 days...`
    );
  }
};
console.log(printForecast([21, 23, 45]));
