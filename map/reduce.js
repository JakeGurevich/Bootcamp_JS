/* this is our initial value i.e. the starting point*/
const initialValue = 0;

/* numbers array */
const numbers = [5,367, 10, 15,3,40,43,100];

//maxNumber
const maxNumber = (accumulator, item) => {
    console.log(`accumuletor: ${accumulator},item : ${item}`);

 return accumulator>item ? accumulator:accumulator=item;
  
};


const total = numbers.reduce(maxNumber, initialValue);
console.log(total);


//sumEven
const sumEven = (accumulator, item) => {
    console.log(`accumuletor: ${accumulator},item : ${item}`);

 return item%2===0 ? accumulator+item:accumulator;
  
};
const total2 = numbers.reduce(sumEven, initialValue);
console.log(total2);
//average 
const averageNum = (accumulator, item) => {
    console.log(`accumuletor: ${accumulator},item : ${item}`);

 return accumulator + item;
  
};
const average = (numbers.reduce(averageNum, initialValue))/numbers.length-1;
console.log(average);
