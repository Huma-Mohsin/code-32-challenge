// //Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
function reduceToSum(numbers) {
    var result = numbers.reduce(function (previous_value, current_value) { return previous_value + current_value; }, 0);
    return result;
}
var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Sum of All Numbers in an Array:", reduceToSum(numbers));
//Author-Huma Mohsin
