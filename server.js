const http = require('http');

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/course') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1><b>Ola Pessoal!</b></h1>');
  }

  if (url === '/students') {
    res.setHeader('Content-Type', 'application/json');
    const students = [
      { id: 1, name: 'Maria'},
      { id: 2, name: 'João' }
    ];
    res.end(JSON.stringify(students));
  }
});

server.listen(3000);