const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const file = fs.createReadStream(process.argv[3]);

const server = http.createServer(function(req, res) {
  if (req) {
    file.pipe(res);
  }
});

server.listen(Number(port))
