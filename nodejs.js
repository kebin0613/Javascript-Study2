var http = require("http");
const { type } = require("os");
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World \n');
    res.end();
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');