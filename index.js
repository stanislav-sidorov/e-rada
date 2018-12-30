const Koa = require('koa');
var Router = require('koa-router');
const app = new Koa();
var router = new Router();

router.get('/api/test', (ctx, next) => {
    ctx.body = 'test';
});

router.get('/api/test1', (ctx, next) => {
    ctx.body = 'test1';
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(8000);



const axios = require('axios');
axios.get('https://data.rada.gov.ua/ogd/etc/global_stat.json', {
    ids: {
      "mps": 4
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
