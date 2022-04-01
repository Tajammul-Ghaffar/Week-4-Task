const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/api/login') {
        res.write(JSON.stringify([1,2,3]));
        res.end();

    }
const server = http.createServer((req, res) => {
    if (req.url === '/api/register'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

})
});

server.listen(8080);
