/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
  const header = Object.keys(data[0]).map((key) => {
    const [firstLetter, ...rest] = key;
    return `${firstLetter.toUpperCase()}${rest.join('')}`
  });
  const paddings = header.map((key) => key.length);
  
  data.forEach((row) => {
    Object.values(row).forEach((value, index) => {
      paddings[index] = Math.max(paddings[index], `${value}`.length);
    })
  });
  const line = "+"+ paddings.map(p => '-'.repeat(p+2)+"+").join("");
  const table = [line];
  table.push(`|${header.map((value, index) => " " +value + " ".repeat(paddings[index] - value.length) + " |").join("")}`); 
  table.push(line);
  data.forEach((row) => {
    const values = Object.values(row);
    table.push("|"+values.map((value, index) => " " + value + " ".repeat(paddings[index] - `${value}`.length) +  " |").join(""));
  })
  table.push(line);
  return table.join("\n");
}


const table = drawTable([
  { id: 1, score: 95 },
  { id: 2, score: 85 }
])

console.log(table);
