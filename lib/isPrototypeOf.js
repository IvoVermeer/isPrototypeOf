(function main(root) {
	'use strict';
	function myPrototypeOf (prototype, object) {
		if ( prototype === null || prototype === undefined ) {
			throw new TypeError ('prototype cannot be null or unefined');
		}
		var returnValue = false;
		if ( !(Object.getPrototypeOf(object)) ) {
			return false;
		}
		returnValue = prototype === Object.getPrototypeOf(object);
		if (!returnValue) {
			returnValue = myPrototypeOf(prototype, Object.getPrototypeOf(object));
		}
		return returnValue;
	}

	root.myPrototypeOf = myPrototypeOf;
})(this); 
