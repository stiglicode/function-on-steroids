const fn_gate = (store, cb) => {
	if (store !== temp.Array) {
		cb(store);
	} else {
		throw new Error(
			"Store initialization was unsuccessful!\nStore must be an array!"
		);
	}
};
