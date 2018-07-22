const http = require('http');

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (url === '/course' && method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1><b>Ola Pessoal!</b></h1>');
  }

  if (url === '/course' && method === 'POST') {
    res.setHeader('Content-type', 'text/html');
    res.end('<h1><b>Não é possível criar um novo curso agora!</b></h1>');
  }

  if (url === '/students' && method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    const students = [
      { id: 1, name: 'Maria'},
      { id: 2, name: 'João' }
    ];
    res.end(JSON.stringify(students));
  }
});

server.listen(3000);