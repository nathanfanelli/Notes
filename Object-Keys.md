Object.keys, values, entries:

- For plain objects, we can use: 
    - Object.keys(obj) - returns an array of object keys.
    - Object.values(obj) - returns an array of object values.
    - Object.entries(obj) - returns an array of object [key, value] pairs.
- The call syntax is = map.keys();
- Ex: 

let user = {
	name: ‘John’,
	age: 30
};

// Loop over values
for (let value of Object.values(user)) {
	alert(value); // John, then 30
};

- Objects lack many methods that exist for arrays, such as map(), filter(), etc.
- If we’d like to apply array methods to objects, we can use Object.entries followed by Object.fromEntries: 
    - 1. Object.entries(obj) // This gets an array of key/value pairs from the obj.
    - 2. Use array method on that array, e.g. map.
    - 3. Object.fromEntries(array) // Use on the resulting array to turn it back into an object

Ex: 

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8

1. Write a function that returns the number of properties in the object: 

let user = {
	name: ‘John’,
	age: 30
};

alert( count(user) ); // 2

SOLUTION: 

function count(obj) {
	return Object.keys(obj).length;
}
