
//a.
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
console.log(
  foods.sort((a, b) => {
    
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    } else {
      return 0;
    }
  })
);
//to ascending
console.log(
  foods.sort((a, b) => {
    
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    } else {
      return 0;
    }
  })
);



// with an uppercase
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
console.log(
  foodsWithUpperCase.sort((a, b) => {
    const aLower = a.toLocaleLowerCase();
    const bLower = b.toLocaleLowerCase();
    if (aLower < bLower) {
      return -1;
    }
    if (aLower > bLower) {
      return 1;
    } else {
      return 0;
    }
  })
);
//to ascending 
console.log(
  foodsWithUpperCase.sort((a, b) => {
    const aLower = a.toLocaleLowerCase();
    const bLower = b.toLocaleLowerCase();
    if (aLower > bLower) {
      return -1;
    }
    if (aLower < bLower) {
      return 1;
    } else {
      return 0;
    }
  })
);


//c. Longest word
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
console.log(
  words.sort((a, b) => {
   return a.length - b.length;
  })
);
