const http = require('http');
const url = require('url');
const port = process.argv[2];

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function getUnixTime(time) {
  return {
    unixtime: time.getTime()
  }
}

const server = http.createServer(function(req, res) {

  const obj = url.parse(req.url, true);
  const time = new Date(obj.query.iso);
  let result = "";

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = getUnixTime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result));
  }

});

server.listen(Number(port));
