(function main(root) {
	'use strict';
	function myPrototypeOf (prototype, object) {
		if ( prototype === null || prototype === undefined ) {
			throw new TypeError ('prototype cannot be null or unefined');
		}
		var returnValue = false;
		if (prototype === undefined || object.__proto__ === undefined) {
			return false;
		}
		returnValue = prototype === object.__proto__;
		if (!returnValue) {
			returnValue = myPrototypeOf(prototype, object.__proto__);
		}
		return returnValue;
	}

	root.myPrototypeOf = myPrototypeOf;
})(this); 
