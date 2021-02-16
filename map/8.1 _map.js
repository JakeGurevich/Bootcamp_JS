// 1. Create 3 separate objects that their key is called name
// and their value is a string. Store them in separate
// variables.
// 2. Create a new Map object that sets each object as a key
// and assign an id number as the value.
// 3. Iterate over the Map object with the for..of loop.
// - log the name and id
const person1 = {
  name: "David",
};
const person2 = {
  name: "Bill",
};
const person3 = {
  name: "Vlad",
};
myMap = new Map();
console.log(myMap.set(person1, "1112"));
console.log(myMap.set(person2, "1113"));
myMap.set(person3, "1114");

for (const [person, id] of myMap) {
  console.log(`Name: ${person.name},Id: ${id}`);
}
