
export function json2Table(json_daten) {
  let cols = Object.keys(json_daten[0]);

  //Map over columns, make headers,join into string
  let headerRow = cols.map((col) => "<th>"+`${col}`+"</th>").join('');

  let rows = json_daten.map((row) => {
      let tds = cols.map((col) => `<td>${row[col]}</td>`).join('');
      return `<tr>${tds}</tr>`;
    })
    .join('');

  const js_table = `
	<table>
		<thead>
			<tr>${headerRow}</tr>
		<thead>
		<tbody>
			${rows}
		<tbody>
	<table>`;

  return js_table;
}

export default json2Table;