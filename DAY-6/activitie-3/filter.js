let marks = [34, 67, 56, 89, 78, 82, 45, 32, 28, 18];

let newList = marks.filter((ele) => {
  if (ele >= 30) {
    return ele;
  }
});
console.log(newList);
//so basicaly filter is used to check some conditation and it returns the element.
