let cartItemsPrise = [1, 2, 3, 4];

let result = cartItemsPrise.reduce((ep, i) => {
  return ep + i;
}, 0);
console.log(result);

//this method return 1 value at the end it take 2 value one a callback and 2nd a intial value.
