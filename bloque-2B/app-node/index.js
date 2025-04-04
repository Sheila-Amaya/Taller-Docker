const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hola desde Node.js en Docker');
});
server.listen(3000);