// Template Literals //
let word1 = 'Dylan';
let word2 = 'Israel';
let num1 = 2;
let num2 = 3;

const fullName = `${num1 + num2} ${word2}`;

console.log(fullName);

// Destructuring Objects
const personalInformation = {
    firstName: 'Dylan',
    lastName: 'Israel',
    city: 'Austin', 
    state: 'Texas', 
    zipCode: 73301
};

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);

// Destructuring Arrays
let [firstName, middleName, lastName] = ['Dylan', 'Code God', 'Mack'];

lastName = 'Clemenza';
console.log(lastName);

// Object Literal 
function addressMaker(city, state) {
    const newAddress = {city, state};

    console.log(newAddress);
}

addressMaker('Austin', 'Texas');

// Object Literals (Challenge)
function addressMaker(address) {
    const {city, state} = address;

    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)

}

// For of Loop
let fullName = 'this is a phrase';

for (const char of fullName) {
    console.log(char);
}

// For of loop (Challenge)
let incomes = [62000, 67000, 75000];

for (let income of incomes) {
    income += 5000;
}
// Doesn't change the values because for of loops are only designed to iterate over values
console.log(incomes);

// Spread Operator
let example1 = [1,2,3,4,5];
let example2 = [...example];
example2.push(true);

console.log(example2);

let example = {
    firstName: 'mike'
};

let example2 = {
    ...example1
}

// Rest Operator
function add(...nums) {
    
    console.log(nums);
}

add(4,5,6,7);

// Arrow functions
function add(...nums) {
    let total = nums.reduce( (x, y) => return x * y);

    console.log(total);
}

add(4,5,6,7);

// Defaulat Params
function add(numArray = []) {
    let total = 0;
    numArray.array.forEach((element) => {
        total += element;
    });

    console.log(total);
}

add();

// Includes ()
let numArray = [1,2,3,4,5];

console.log(numArray.includes(0));

// Let & Const
if (false) {
    let example = 5;
}

console.log(example);

/*
var example;

if (false) {
    example = 5;
}

*/

const example = 5;

console.log(example);

// Import & Export
export const data = [1,2,3];

// In different file: 
import { data } from './example.js';
let updatedData = data;

data.push(5);
console.log(updatedData);

// padStart() & padEnd()
let example = 'name'

console.log(name.padStart(5, 'a'));

// padStart() & padEnd() (Challenge)
let example = 'YouTube.com/CodingTutorials360';

//console.log(example.padStart(100));
//console.log(example.padEnd(1));

// Classes
class Animal {
    constructor(type, legs){
        this.type = type;
        this.legs = legs;
    }

    meow(sound = 'Loud Noise') {
        console.log(sound);
    }

    get metaData() {
        return `Type: ${this.type}`;
    }

    static return10() {
        return 10;
    }
}

export class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }
}

// Trailing Commas
function add(param1,) {
    const example = {
        name: 'Dylan',
    }
    console.log(example)
};

// Async & Await
const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

async function getTop100Campers() {
    const response = await fetch(apiUrl);
    const json = await response.json();

    console.log(json[0]);
}

/* function getTop100Campers() {
    fetch(apiUrl)
    .then((r) => r.json())
    .then((json) => {
        console.log(json[0])
    }).catch((error) => {
        console.log('failed');
    });
} 
*/

getTop100Campers();

// Async & Await (Challenge)
function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 3000)
    });
}

resolveAfter3Seconds().then((data) => {
    console.log(data);
})

async function getAsyncData() {
    const result = await resolveAfter3Seconds();
    console.log(result);
}

getAsyncData();

// Sets
const exampleSet = new Set([1,1,1,2,2,2,2]);

exampleSet.add(5);
exampleSet.add(5).add(17);

exampleSet.delete(5)
console.log(exampleSet.size);

