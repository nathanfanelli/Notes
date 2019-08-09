Pure functions 


A function is a process which takes in some input (argument) and produces an output called a ‘return value’. Functions serve the following purposes:

- Mapping: Produce an output based on arguments passed into a function. A function maps input values to output values. 
- Procedures: Functions may be called to perform a sequence of steps. The sequence is known as a procedure. Programming in this manner is known as ‘Procedural Programming’. 
- I/O: Some functions serve to communicate with other parts of the system, such as the screen, storage, system logs, or network. 

Mapping: 

Pure functions are all about mapping. Functions map input arguments to return values, meaning for each set of inputs there exists an output. A function will take the inputs and return the corresponding output. 

Ex: Math.max(2, 8, 5);  // 8

The example above takes 2, 8, and 5 as arguments. They’re values passed into the function. Math.max() is a function that takes any number of arguments and returns the largest argument value. In this case, the function returned 8 because 8 was the largest value of the three arguments. 

Functions hold great importance in computing and math. They help us process data in useful ways. Efficient programmers give functions descriptive names that allow users to see the function name and know what the function strives to do. 

Math has its own set of functions too, and they work a lot like functions in JavaScript as well. 

Ex: f(x) = 2x | JS: const double = x => x * 2;
	console.log(double(5));  // 10 

A pure function is a function which: 
    - Given the same input, will always return the same output. 
    - Produces no side effects. 

Pure functions form the foundation of functional programming. Pure functions are completely independent of outside state and as such, they are immune to entire classes of bugs that have to do with shared mutable state. 

Pure functions are extremely independent. They’re easy to move around, refactor, and reorganize in your code, making your programs more flexible and adaptable for future changes. 

Ex: Math.random(); // => 0.4434234234

Math.random() is not pure. 

A pure functions produces no side effects, which means that it can’t alter any external state. 

Immutability: 

JavaScript’s object arguments are references, which means that if a function were to mutate a property in an object or array parameter, that would mutate state that is accessible outside of the function. Pure functions must not mutate external state. 

Consider this mutating, impure ‘addToCart()’ function: 

const addToCart = (cart, item, quantity) => {
	cart.items.push({
		item, 
		quantity
	});
	return cart;
};

test(‘addToCart()’, assert => {
	const msg = ‘addToCart() should add a new item to the cart.’;
	const originalCart = {
		items: []
	};
	const cart = addToCart(
		originalCart,
		{
		 name: “Digital SLR Camera”,
		 price: ’1495’
		},
		1
	);

	const expected = 1; // num items in cart
	const actual = cart.items.length;

	assert.equal(actual, expected, msg);

	assert.deepEqual(originalCart, cart, ‘mutates original cart.’);
	assert.end();
});


This function takes in a cart, an item to add to the cart, and an item quantity. The function returns the same cart passed into the function, but with the item added to it. 

The problem with this is that we’ve mutated a shared state. Other functions may be relying upon the cart object state to be what it was before the function was called and now that its shared state has been mutated, we have to worry about what impact that will have on the program logic if we change the order in which functions have been called. 
