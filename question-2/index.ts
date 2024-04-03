// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.

function filterOut(ArraysOfNumbers) {
  for (const iterator of ArraysOfNumbers) {
    if (iterator > 10) {
      filterArray.push(iterator);
    }
  }

  return filterArray;
}

let ArraysOfNumbers = [11, 67, 2, 89, 5, 98, 1, 43, 10, 32, 0, 12];
let filterArray: number[] = [];
console.log("Original Array:", ArraysOfNumbers);

console.log("an array of numbers greater than 10:", filterOut(ArraysOfNumbers));//Author-Huma Mohsin
