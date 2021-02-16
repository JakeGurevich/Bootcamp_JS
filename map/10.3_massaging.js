const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
   ]
//    1. Create a function that returns all the names from the array.
function onlyNames(arr) {
    return  arr.map(el=>el.name);
  }
  console.log(onlyNames(data));
// 2. Create a function that returns all the objects that are born before 1990.
function bornBefore(arr){
  
  return  arr.filter(el =>{
      const split = el.birthday.split("-")
      const birthday = split[split.length-1];
      if(birthday<1990){
          return el;
    }
      console.log(split);
  }
  )}
console.log(bornBefore(data));
// 3. Create a function that returns an object of all the different foods from all
// the objects as the key and the number of times that food is present in all the
// objects as the value.
function favFood(arr){
    const obj = {};
   arr.forEach(el=>{
      el.favoriteFoods.meats.forEach(meat=>{ if (obj[meat]) {
          obj[meat] = obj[meat] + 1;

      }else {obj[meat] = 1;
    }
        
          
      });
      el.favoriteFoods.fish.forEach(fish=>{ if (obj[fish]) {
        obj[fish] = obj[fish] + 1;

    }else {obj[fish] = 1;
  }
    }
    
    );
 }); return obj; 
};
console.log(favFood(data));