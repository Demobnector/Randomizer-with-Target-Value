// this returns the randomized value.
function randomizer(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
// returns the decimal value.
function randomizerDecimal(min, max) {
	// randomize the value first.
	let randomizer_value = String((Math.random() * (max - min + 0.01)) + min);
	
	// locate where the decimal is then add 3 to its value returning the nearest hundredths.
	let randomizer_dot = randomizer_value.indexOf('.') + 3;
	
	let randomizer_result = '';
	
	// hard to explain but this code writes the result.
	for(let i = 0; i < randomizer_dot; i++) {
		randomizer_result += randomizer_value.charAt(i);
	};
	
	// convert the result to number.
	return Number(randomizer_result);
};