// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
function myFunction(a, n) {
  let result = a.filter((_, index) => (index + 1) % n === 0);
  console.log(result);
}

myFunction([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2);
