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


const axios = require('axios');
axios.get('https://data.rada.gov.ua/ogd/etc/global_stat.json', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  }); 

