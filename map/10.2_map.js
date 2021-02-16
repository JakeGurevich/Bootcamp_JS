// Answer the questions below and use the map or the
// forEach method :
// 1. Write a function called doubleValues which accepts an
// array and returns a new array with all the values in the
// array passed to the function doubled.

let arr1=[];
function doubleValues(element){

arr1 =  element.map(element =>element*2);
   return arr1;

}
const arr3 = [23,45,67,3,4,5,46,34];
doubleValues(arr3);
console.log(doubleValues(arr3));

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
function onlyEvenValues(arr){
    const array=[];
    const obj={};
   arr.forEach(element => {
       
    if(element%2==0){ 
        array.push(element) ;
          
    }
        
    }) 
   return array; 
}
console.log(onlyEvenValues(arr3))
// const evenValues = 


// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.
// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.

// function vowelCount(string){
//     const vowels = {a:3, o:2,u:4};
//     string.forEach((char)=>{
//         if(vowels.hasOwnProperty(char)){
//             vowels[char]++;
//         }
//     }
// }
// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
