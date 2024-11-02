// O(1) - Constant Time Complexity, 
//      - Performance is constant and does not depend on the input size.

// Input: The function takes an array and an index as parameters.
// Operation: It retrieves the element at the specified index in the array. Accessing an element by index is a direct lookup.
// Complexity: Regardless of the size of myArray, the time to access an element at a given index remains the same (constant time). 

function getElement(array) {
  return array[0];
}


const myArray = [10, 20, 30, 40, 50];
console.log(getElement(myArray)); // Outputs: 30


