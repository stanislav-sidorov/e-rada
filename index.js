function hello() {
console.log(`Hello node.js!\nUsing ${process.version} node version.`);
}
hello();

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);