const obj = {};
const maxCount = 100000;
console.time("My operation");
for (let i = 0; i < maxCount; i++) {
  obj[i] = i;
}
console.timeEnd("My operation");
const map = new Map();

console.time("My operation2");
for (let i = 0; i < maxCount; i++) {
  map.set(i, i);
}
console.timeEnd("My operation2");
console.time("My operation3");
for (let i = 0; i < maxCount; i++) {}
console.timeEnd("My operation3");
// console.log(obj);
// console.log(map);

console.time("My operation4");
for (let i = 0; i < maxCount; i++) {
  if (obj[i] === 999) {
    console.log("yes");
  } else {
    ("no");
  }
}
console.timeEnd("My operation4");
console.time("My operation5");
for (let i = 0; i < maxCount; i++) {
  if (map.get(i) === 999) {
    console.log("yes");
  } else {
    ("no");
  }
}
console.timeEnd("My operation5");
