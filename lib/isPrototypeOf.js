(function main(root) {
	'use strict';
	function myPrototypeOf (prototype, object) {
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
