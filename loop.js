// this is a script that updates every ticks.

function loop() {
	requestAnimationFrame(loop);
	
	// stop the min value exceeding the max value
	if(Number(input_min.value) > Number(input_max.value)) {
		input_min.value = input_max.value;
	};
	
	// stop the value from subceeding min value or exceeding max value
	if(Number(input_target.value) < Number(input_min.value)) {
		input_target.value = input_min.value;
	} else if(Number(input_target.value) > Number(input_max.value)) {
		input_target.value = input_max.value;
	};
	
	// assign values when there are no values, otherwise they'll return as an error
	if(input_min == '') { data.min = 0; };
	if(input_max == '') { data.max = 2; };
	if(input_target == '') { data.target = 0; };
};

// call the loop after reading the whole code.
loop();