
 export function json2Table(json) {
  let cols = Object.keys(json[0]);


  //Map over columns, make headers,join into string
  let headerRow = cols
    .map(col => `<th>${col}</th>`)
    .join("");

  let rows = json
    .map(row => {
      let tds = cols.map(col => `<td>${row[col]}</td>`).join("");
      return `<tr>${tds}</tr>`;
    })
    .join("");

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

export const beispieldaten =[{
  "first_name": "Toast",
  "last_name": "Follie",
  "company": "Ausbeuters"
}, {
  "first_name": "Töff",
  "last_name": "Deller",
  "company": "Bullshieter"
}, {
  "first_name": "Osteria",
  "last_name": "Italia",
  "company": "Hü & Hott & Co"
}]

