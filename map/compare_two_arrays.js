// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.


const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];

function compare(arr,arr1){
    
for (let i = 0; i < food.length; i++) {
    for (let j = 0; j < food1.length; j++) {
        if ( food[i]===food1[j]){
          console.log (food[i]) ;
        } else {
              false;
        }


     
    }
  }
  
}
console.log(compare(food,food1));