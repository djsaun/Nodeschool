const http = require('http');
const bl = require('bl');
const results = [];
let count = 0;

function httpGet(index) {
  http.get(process.argv[2 + index], function(response) {
    response.pipe(bl(function(err, data) {
      if (err) {
        return console.log(err);
      }
      results[index] = data.toString();

      count++;

      if (count === 3) {
        for (let j = 0; j < 3; j++) {
          console.log(results[j])
        }
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i);
}
