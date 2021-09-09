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
