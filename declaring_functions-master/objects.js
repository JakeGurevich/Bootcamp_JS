const person = {
  name: "David",
  age: 35,
  clothes: {
    pants: 3,
    hat: 1,
  },
  sayHello: function(greeting = 'Hey'){
      return `${greeting} ${this.name}`;
  },
};
person.job = "web developer";
// const propToCheck = prompt("What to check?");
// console.log(propToCheck);
console.log(person.sayHello());
for (const prop in person) {
    console.log(`person.${prop} = ${person[prop]}`);