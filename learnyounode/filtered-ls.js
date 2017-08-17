const fs = require('fs');
const path = require('path');
const targetDir = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(targetDir, function(err, filepaths) {
  if (err) {
    return console.log(err);
  }

  for (const filepath of filepaths) {
    if (extension === path.extname(filepath))
    console.log(filepath);
  }
});
