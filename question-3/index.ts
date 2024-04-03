// //Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

function reduceToSum(numbers){
    let result =numbers.reduce((previous_value,current_value)=>previous_value+current_value,0);
    return result;
}




let numbers:number[]=[10,20,30,40,50,60,70,80,90,100];
console.log("Sum of All Numbers in an Array:",reduceToSum(numbers));
//Author-Huma Mohsin