const fs = require('fs');

const filename = process.argv[2];

fs.readFile(filename, function(err, fileContents) {
  if (err) {
    return console.log(err);
  }

  const fileStr = fileContents.toString();
  const numNewLines = fileStr.split("\n").length-1;
  console.log(numNewLines);
});
