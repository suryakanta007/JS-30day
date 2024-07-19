let arr = [5, 6, 7, 8, 9];

let result = arr.map((ele) => {
  if (ele % 2 == 0) {
    return ele;
  } else {
    return ele + 1;
  }
});
console.log(result);
//basicaly the map method traverse on the every element of the array and perform some operation and also able to return if we want.
