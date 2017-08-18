const url = process.argv[2];
const http = require('http');
const bl = require('bl');

http.get(url, function(response) {
  response.pipe(bl(function(err, data){
    if (err) {
      return console.log(err);
    }

    const dataFeed = data.toString();
    console.log(dataFeed.length)
    console.log(dataFeed);
  }))
});
