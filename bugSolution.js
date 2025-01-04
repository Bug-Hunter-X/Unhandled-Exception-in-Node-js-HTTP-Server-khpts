const http = require('http');

const server = http.createServer((req, res) => {
  // Proper error handling
  try {
    if (req.url === '/error') {
      throw new Error('Intentional server error');
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  } catch (err) {
    console.error('Request error:', err);
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
  }
});

server.on('error', err => {
  console.error('Server error:', err);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});