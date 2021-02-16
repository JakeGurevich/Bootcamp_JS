// 1. Write a a function called ‘isString’ that receives 2
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback
// function which logs that string to the console.
// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
// 4. Create your own function that will receive from one of its
// arguments a callback function.

//1.
function printStr(str) {
  console.log(str);
}
function chechStr(str, callback) {
  typeof str === "string" ? callback(str) : console.log("not a string");
}
chechStr("4", printStr);

//2.
function firstWordUpperCase(str, callback) {
  const [first, ...rest] = str.split(" ");
  const result = [first.toUpperCase(), ...rest].join(" ");
  if (typeof callback === "function") {
    return callback(result);
  } else {
    return;
  }
}
function makeArray (str){
  arr = str.split(" ");
  console.log (arr);
}
function putDashes(str) {
  str = str.replace(/ /g, "-");
  console.log(str);
}
firstWordUpperCase("jhjhj kjkjk kkj kjkj", putDashes);
firstWordUpperCase("jhjhj kjkjk kkj kjkj", makeArray);