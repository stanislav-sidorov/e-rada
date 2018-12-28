function hello() {
console.log(`Hello node.js!\nUsing ${process.version} node version.`);
}
hello();

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Done');
  res.end();
}).listen(8000);

 

var request = new XMLHttpRequest();
request.open('GET', 'https://data.rada.gov.ua/ogd/etc/global_stat.json', true);

request.onload = function () {
	var data = JSON.parse(this.response);
	for (var i = 0; i < data.length; i++) {
		console.log(data[i].ids);
	}
}

request.send();