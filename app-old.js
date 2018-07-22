const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    let message = {
        name: 'Santiago',
        age: 30,
        url: request.url
    }
    response.write(JSON.stringify(message));
    response.end();
}).listen(8080);

console.log('Server listening to port 8080');