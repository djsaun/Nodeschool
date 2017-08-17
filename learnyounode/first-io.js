const fs = require('fs')

const filename = process.argv[2];
const fileData = fs.readFileSync(filename);
const fileStr = fileData.toString();
const numNewLines = fileStr.split('\n').length-1;

console.log(numNewLines);
