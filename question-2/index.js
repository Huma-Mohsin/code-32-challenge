// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.
function filterOut(ArraysOfNumbers) {
    for (var _i = 0, ArraysOfNumbers_1 = ArraysOfNumbers; _i < ArraysOfNumbers_1.length; _i++) {
        var iterator = ArraysOfNumbers_1[_i];
        if (iterator > 10) {
            filterArray.push(iterator);
        }
    }
    return filterArray;
}
var ArraysOfNumbers = [11, 67, 2, 89, 5, 98, 1, 43, 10, 32, 0, 12];
var filterArray = [];
console.log("Original Array:", ArraysOfNumbers);
console.log("an array of numbers greater than 10:", filterOut(ArraysOfNumbers)); //Author-Huma Mohsin
