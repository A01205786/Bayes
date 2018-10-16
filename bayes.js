var readline = require('readline');



var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var arr = [];
var i = 0;
var result = 0;

rl.on('line', (line) => {
  arr[i++] = parseInt(line);
}).on('close', () => {
  
  process.exit(0);
});
