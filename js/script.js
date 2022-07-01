'use strict';
let myData = function (rows, columns) {
	let arr = [];
	for (var i = 0; i < rows; i++) {
		arr.push(Array(columns).fill(null))
	}
	return arr
}
document.getElementById('create').onclick = function () {
	document.getElementById('create').disabled = true;
	const row = +document.getElementById("row").value,
		column = +document.getElementById("column").value;
	if (row != 0) {
		const hot = new Handsontable(spreadsheet, {
			data: myData(row, column),
			licenseKey: "non-commercial-and-evaluation",
			rowHeaders: true,
			colHeaders: true,
			className: 'custom-cell',
			className: 'custom-table',
			colWidths: 50,
		});
		document.getElementById('values').hidden = true;
		document.getElementById('textarea').hidden = false;
		document.getElementById('exp').onclick = function () {
			document.getElementById('textarea').value = JSON.stringify(hot.getData())
		}
		document.getElementById('imp').onclick = function () {
			if (document.getElementById('textarea').value.length > 0) {
				const a = document.getElementById('textarea').value,
					b = JSON.parse(a);
				hot.loadData(b)
			}
			else {
				return;
			}
		}
	}
	else {
		alert("Please, specify a value !");
		window.location.reload();
	}
}