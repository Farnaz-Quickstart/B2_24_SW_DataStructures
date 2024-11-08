// O(n) - Linear Time Complexity
//      - Algorithm grows linearly with the input size 𝑛
//      - So, if the input size doubles, the execution time roughly doubles.
// Example 1
function printElements(arr) {
  console.log (arr.length)
  for (i =0; i< n; i++){}

  for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
  }
  
}
// n = number of inputs
const numbers = [1, 2, 3, 4, 5, 1, 2, 3]; 
printElements(numbers)


// Example 2
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }H
  return sum;
}

// Example 3
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
  }
  return max;
}



// console.log(sumArray(numbers)); // O(n), as we process each element once
// printElements(numbers); // O(n), because we iterate through the array once
// console.log(findMax(numbers)); // O(n), as we examine each element once