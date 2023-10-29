const http = require('http');
const server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Carlo sta scrivendo qui');
});

server.listen(80);

