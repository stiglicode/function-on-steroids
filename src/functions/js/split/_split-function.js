function FutureSplitMethod(separators) {
	return LAYOUT.body(
		separators,
		s => {
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
		},
		this
	);
}
