// // Use the .map() method to create a new array that contains the length of each word from an array of words.

// Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items.

let country:string[]=["Pakistan","oman","bangladesh","kuwait","mexico"];
function find_length(country:any){
  return country.map(country=>country.length);
  
}
let new_array:number[]=[];
new_array.push(find_length(country))
console.log(country);

console.log(new_array);
//author-Huma Mohsin