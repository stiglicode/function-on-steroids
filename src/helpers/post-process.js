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
