function TableClear() {
	// loop that clears and bugs at the same time.
	for(let i = 0; i < table_printed.length; i++) {
		table_printed[i].remove();
	};
	
	// if the table is still not clear, call the function itself preventing the bug.
	if(table_printed.length !== 0) {
		TableClear();
	};
};