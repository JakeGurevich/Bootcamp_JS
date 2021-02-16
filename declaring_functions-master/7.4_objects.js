// 1. Implement the following getCandy function:
// The function should return the candy element with the specified id.
// 2. Implement the following getPrice function:
// The function should return the price (number) of the candy with the specified
// id.
// 3. Implement the following addCandy function:
// The function should add a new candy to the candy list in candyStore with a
// default amount of 1. The function will not return anything.
// 4. Implement the following buy function: The function should add the candy
// price to the cashRegister, and decrease the amount property of the relevant
// candy.
const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};
// console.log(candyStore.candies[0]);

function getCandy(candyStore, id) {
  const candy = candyStore.candies.find((candy) => {
    return candy.id === id;
  });
  return candy || "no candies found";
  console.log(candy);
}
getCandy(candyStore, "as12f");

function getPrice(candyStore, id) {
  //your code
}
getPrice(candyStore, "5hd7y");

function addCandy(candyStore, id, name, price) {
  //your code
}
addCandy(candyStore, "45345");
function buy(candyStore, id) {
  //your code
}
buy(candyStore, "5hd7y");
