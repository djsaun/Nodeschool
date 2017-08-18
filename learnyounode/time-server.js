const net = require('net');
const port = process.argv[2];

const server = net.createServer(function(socket) {
  const date = new Date();
  const fullYear = date.getFullYear();
  let fullMonth = date.getMonth() + 1;

  if (fullMonth < 10) {
    fullMonth = '0' + fullMonth;
  }

  let currentDay = date.getDate()

  if (currentDay < 10) {
    currentDay = '0' + currentDay;
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();

  socket.write(fullYear.toString() + "-" + fullMonth.toString() + "-" + currentDay.toString() + " " + hours.toString() + ":" + minutes.toString() + "\n");
  socket.end();
});

server.listen(port);
