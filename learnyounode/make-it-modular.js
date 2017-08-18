const path = require('path');
const dir = process.argv[2];
const filter = process.argv[3];
const mymodule = require('./make-it-modular-module.js')

const callback = function(err, list) {
  if (err) {
    throw err;
  }
  list.forEach(function(file) {
    console.log(file)
  })
}

mymodule(dir, filter, callback);
