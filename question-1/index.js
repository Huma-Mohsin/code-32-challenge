// // Use the .map() method to create a new array that contains the length of each word from an array of words.
// Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items.
var country = ["Pakistan", "oman", "bangladesh", "kuwait", "mexico"];
function find_length(country) {
    return country.map(function (country) { return country.length; });
}
var new_array = [];
new_array.push(find_length(country));
console.log(country);
console.log(new_array);
//author-Huma Mohsin
