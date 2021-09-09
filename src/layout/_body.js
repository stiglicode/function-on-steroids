const __body = (arg, cb, native) => {
	if (!arg) {
		throw new Error("Sperators has not be empty.\nSeparator must be a array");
	} else if (typeof arg === "string") {
		return native.split(arg);
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
