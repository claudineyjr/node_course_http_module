const http = require('http');

const server = http.createServer((request, response) => {
  console.log('Requisição feita');
  const { headers, method, url } = request;
  console.log('Headers:')
  console.log(headers);
  console.log('Método:');
  console.log(method);
  console.log('URL:');
  console.log(url);

});

server.listen(3000);