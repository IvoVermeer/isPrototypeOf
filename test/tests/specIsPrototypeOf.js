/*eslint-disable no-console*/
/*global tests, eq, myPrototypeOf*/
/*
The assignment
In AccountingJS 8 and 9, you learned about JavaScript's prototype system. This challenge builds on those videos.

Write a function, isPrototypeOf, that works just like Object.prototype.isPrototypeOf. Since your solution will be called as a function rather than a method, the way you use it will be slightly different, but the outcome should be the same.

Obviously, don't use Object.prototype.isPrototypeOf in your solution, but feel free to use other methods on Object.prototype.

var dog = {
  fetch: function() {
    console.log(fetch);
  }
};

var myDog = Object.create(dog);
var empty = Object.create(null);

// These two lines are equivalent.
dog.isPrototypeOf(myDog);  // native function returns true
isPrototypeOf(dog, myDog); // your function does the same

// These two lines, similarly should return the same thing.
dog.isPrototypeOf(empty);  // native function returns false
isPrototypeOf(dog, empty); // your function does the same

// This should work too.
Object.prototype.isPrototypeOf(myDog);  // native function returns true
isPrototypeOf(Object.prototype, myDog); // your function does the same
*/

// Testing code:
var dog = {
	fetch: function() {
		console.log(fetch);
	}
};

var myDog = Object.create(dog);
var empty = Object.create(null);

tests({
	'It should return true if the object in the first argument has the object in the second argument as its prototype.': function () {
		eq(myPrototypeOf(dog, myDog), true);
	},
	'It should return false if the object in the first argument doesn\'t have the object in the second argument as its prototype.': function () {
		eq(myPrototypeOf(dog, empty), false);
	},
	'It should also return true if the prototype chain is indirect.': function () {
		eq(myPrototypeOf(Object.prototype, myDog), true);
	},
// 	'It should be able to compare the built-in String': function () {
// 		eq(myPrototypeOf(String.prototype, 'two'), true);
// 	},
	'It should be able to compare the built-in Array.': function () {
		eq(myPrototypeOf(Array.prototype, []), true);
	},
	'It should throw a TypeError if the prototype argument is undefined or null.': function () {
		var errorWasThrown = false;
		try {
			myPrototypeOf(undefined, {});
		}
		catch (e) {
			errorWasThrown = true;
			eq(e instanceof TypeError, true);
		}
		eq(errorWasThrown, true);
	},
	// 'It should.': function () {},
});
