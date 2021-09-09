const __trim = array => {
	if (typeof array === "array" || typeof array === "object") {
		for (let i = 0; i < array.length; i++) {
			array[i] = array[i].trim();
		}
	} else {
		throw new Error("Argument has to be type of array");
	}
};
