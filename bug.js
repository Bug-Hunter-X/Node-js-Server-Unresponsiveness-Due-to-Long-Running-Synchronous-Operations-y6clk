const http = require('http');

const server = http.createServer((req, res) => {
  // The bug is here: missing response to client after a long processing
  // Simulate a long process
  const start = Date.now();
  while (Date.now() - start < 5000) {};

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});