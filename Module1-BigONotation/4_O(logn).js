// O(log n) - Logarithmic Time Complexity
//            Algorithm's execution time increases logarithmically. A common example is binary search, where the input size is halved at each step.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (arr[middle] === target) {
          return middle;
      } else if (arr[middle] < target) {
          left = middle + 1;
      } else {
          right = middle - 1;
      }
  }
  
  return -1;
}

BOOK



const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function searchElement (arr) {
    for (i=0; i< numbers.length; i++) {
        // compare number with the element
    }
}

const number2 = [10, 0, 11, 12, 2]
                         

console.log(binarySearch(numbers, 5)); // O(log n), as binary search cuts the search space in half each step


