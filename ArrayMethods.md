JS Map, Reduce, and Filter

- Filter is a good alternative for a for loop. 

Map(): 

- Use when: You want to translate/map all elements in an array to another set of values (ex: Convert Fahrenheit temps to Celcius)

Ex: 
var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

var celcius = fahrenheit.map(function(elem) {
    return Math.round((elem - 32) * 5 / 9);
}); 

// ES6
// fahrenheit.map(elem => Math.round((elem - 32) * 5 / 9));

celcius //  [-18, 0, 7, 10, 24, 27, 37, 49]

- Parameters = array.map(function(elem,  index, array) { … });


Filter(): 

- Use when: You want to remove unwanted elements based on a condition.
- Ex: Remove duplicate elements from an array.

var uniqueArray = array.filter(function(elem, index, array) {
        return array.indexOf(elem) === index;
    }
);

// ES6
// array.filter((elem, index, arr) => arr.indexOf(elem) === index);

- Parameters = same as Map().


Reduce(): 

- Use when: You want to find a cumulative or concatenated value based non elements across the array.
- Ex: Sum up orbital rocket launches in 2014.

var rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];

var sum = rockets.reduce(function(prevVal, elem) {
    return prevVal + elem.launches;
}, 0);

// ES6
// rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0); 

sum // 85

- Parameters = array.reduce(function(prevVal, elem, index, array) {…});


Conclusion: 

- Each are methods on the array’s prototype object.
- Changing the element in the array parameter in any callback will persist across all remaining callbacks but has no effect on the returned array.
- Callback functions are invoked on indexes with any value, including undefined, but not deleted indexes or indexes that were never assigned values.


