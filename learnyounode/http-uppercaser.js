const http = require('http');
const map = require('through2-map');
const port = process.argv[2];

const server = http.createServer(function(req, res) {
  if (req) {
    req.pipe(map(function(chunk) {
      const stringChunk = chunk.toString();
      return stringChunk.toUpperCase();
    })).pipe(res);
  }
});

server.listen(Number(port));
