/*Used for testing snippets of JS code sinde the Løkker.js keeps running into issues*/

function printMultiplicationTable() {
  for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
      row += `${i} * ${j} = ${i * j}\t`;
    }
    console.log(row);
  }
}

printMultiplicationTable();