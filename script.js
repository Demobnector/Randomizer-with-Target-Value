// assigning the IDs.
const input_min = document.getElementById('input_min');
const input_max = document.getElementById('input_max');
const input_target = document.getElementById('input_target');

const input_start = document.getElementById('input_start');
const input_decimal = document.getElementById('input_decimal');

const table_result = document.getElementById('table_result');

// this would be the ID of a newly printed table.
const table_printed = document.getElementsByClassName('table_printed');

// putting the values in a folder-like group. not necessary though, it just looks good.
const data = {
	min: 0,
	max: 0,
	target: 0,
	value: 0,
	stop: -1,
};

// begins the process. updates after clicking the "Start" button.
input_start.onclick = function() {
	// stop every value from subceeding 0.
	if(Number(input_min.value) < 0) {
		input_min.value = 0;
	};
	if(Number(input_target.value) < 0) {
		input_target.value = 0;
	};
	
	// calculate if there's still a gap between min and max. if not, then create a gap.
	if(!input_decimal.checked) {
		if(Number(input_max.value) - Number(input_min.value) < 1 && input_min.value > 0) {
			data.min = Number(input_max.value) - 1;
			input_min.value = Number(input_max.value) - 1;
		} else if(Number(input_max.value) - Number(input_min.value) < 1 && input_min.value <= 0) {
			// this condition executes if the value of min is already at 0.
			data.max = 1;
			input_max.value = 1;
		};
	} else {
		if(Number(input_max.value) - Number(input_min.value) < 0.01 && input_min.value > 0) {
			data.min = Number(input_max.value) - 0.01;
			input_min.value = Number(input_max.value) - 0.01;
		} else if(Number(input_max.value) - Number(input_min.value) < 0.01 && input_min.value <= 0) {
			data.max = 0.01;
			input_max.value = 0.01;
		};
	};
	
	
	// clear the table.
	TableClear();

	// convert input boxes into number, otherwise they'll remain as a string.
	data.min = Number(input_min.value);
	data.max = Number(input_max.value);
	data.target = Number(input_target.value);
	
	// keep looping until the "data.stop" is higher than "i".
	for(let i = 0; i > data.stop; i++) {
		// update the counter.
		data.counter++;
		
		// randomize the chosen min and max.
		if(!input_decimal.checked) {
			data.value = randomizer(data.min, data.max);
		} else {
			data.value = randomizerDecimal(data.min, data.max);
		};
		
		// print the results to the table.
		let table_row = document.createElement('tr');
		
		// give the newly printed table a class so that it can be removed in a filtered way.
		table_row.setAttribute('class', 'table_printed');
		
		// a loop that assigns values to each column.
		for(let j = 0; j < 2; j++) {
			let table_col = document.createElement('td');
			
			// first column. this shows the number of tries.
			if(j == 0) {
				table_col.setAttribute('class', 'table_first_col');
				table_col.innerHTML = i+1 + ")";
			};
			// second column. this one shows the value chosen in the randomizer
			if(j == 1) {
				table_col.innerHTML = data.value;
			};
			
			table_row.appendChild(table_col);
		};
		table_result.appendChild(table_row);
		
		// when the target value has been achieved, change "data.stop"'s value higher than "i" making it stop the loop.
		if(data.value == data.target) {
			data.stop = i+1; // higher than 1 is certainly enough.
		};
	};
	
	// after the loop has stopped, return the value to its original making it usable again.
	data.stop = -1;
};