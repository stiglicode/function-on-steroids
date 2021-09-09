const temp = {
	Array: [],
	String: "",
};

const fn_init = input => {
	let individualChars = [];

	for (let i = 0; i < input.length; i++) {
		individualChars[individualChars.length] = input[i];
	}

	return individualChars;
};

const fn_gate = (store, cb) => {
	if (store !== temp.Array) {
		cb(store);
	} else {
		throw new Error(
			"Store initialization was unsuccessful!\nStore must be an array!"
		);
	}
};

const __body = (arg, cb) => {
	if (!arg) {
		throw new Error("Sperators has not be empty.\nSeparator must be a array");
	} else if (typeof arg === "string") {
		return this.split(arg);
	} else if (typeof arg === "number") {
		throw new Error(
			"Sperators has not be a number.\nSeparator must be a array"
		);
	} else {
		if (typeof arg === "array" || typeof arg === "object") {
			return cb(arg);
		} else {
			return arg;
		}
	}
};

const __function = (input, cb) => {
	let initValue = temp.Array;

	initValue = fn_init(input[0]);

	fn_gate(initValue, store => {
		let replaced = store;
		for (let j = 0; j < input[1].length; j++) {
			for (let i = 0; i < store.length; i++) {
				if (input[1][j] === replaced[i]) {
					replaced[i] = "";
				}
			}
		}

		let raw = "";
		for (let i = 0; i < replaced.length; i++) {
			raw += replaced[i];
		}

		for (let i = 0; i < raw.length; i++) {
			cb(raw[i], i);
		}
	});
};

const __trim = array => {
	if (typeof array === "array" || typeof array === "object") {
		for (let i = 0; i < array.length; i++) {
			array[i] = array[i].trim();
		}
	} else {
		throw new Error("Argument has to be type of array");
	}
};

const LAYOUT = {
	body: __body,
	trim: __trim,
	function: __function,
};

function FutureReplaceMethod(_old, _new) {
	return [_old, _new, "Function in development"];
}

function FutureSplitMethod(separators) {
	return LAYOUT.body(separators, s => {
		let splitArray = [];
		let splitString = "";

		LAYOUT.function([this, separators], (raw, index) => {
			splitString =
				raw == " " || +index == raw.length - 1
					? (splitArray.push(splitString + raw), "")
					: splitString + raw;
		});

		LAYOUT.trim(splitArray);
		return splitArray;
	});
}

// Initialization string methods
// --------------------------------------------------------------

// # Helpers
//
Object.prototype.asArray = fn_asArray;
Object.prototype.asString = fn_asString;

// # Split
//
String.prototype.steroid_split = FutureSplitMethod;

// # Replace
//
String.prototype.steroid_replace = FutureReplaceMethod;

//# Global helpers functions
//
function fn_asArray() {
	return this;
}

function fn_asString(whiteSpace) {
	let strigify = "";
	if (whiteSpace === true) {
		for (let i = 0; i < this.length; i++) {
			strigify += this[i];
		}
	} else {
		for (let i = 0; i < this.length; i++) {
			strigify += this[i] + " ";
		}
	}
	return strigify;
}

// CommonJS module exports
// --------------------------------------------------------------

//# Split
//
module.exports = String.prototype.steroid_split = FutureSplitMethod;

// ES6 module exports
// --------------------------------------------------------------

//# Split
//
export default String.prototype.steroid_split = FutureSplitMethod;
