const fs = require("node:fs");

function csvTo2DArray (path) {
  const database = fs.readFileSync(path, "utf-8");
  const data = database.split('\r\n')

  return data.map(row => row.split(','))
}


console.log(csvTo2DArray("./database.csv"));