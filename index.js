const Koa = require('koa');
var Router = require('koa-router');
const app = new Koa();
var router = new Router();
var fs = require("fs");
var pug = require('pug');
const uuidv4 = require('uuid/v4');

const client = require("./connect");


router.get('/api/test', (ctx, next) => {
    ctx.body = 'test';
});

router.get('/api/test1', (ctx, next) => {
    ctx.body = 'test1';
});
router.get('/', (ctx, next) => {
    ctx.body = html;
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);

const axios = require('axios');

//какие тачки у депутатов
    var name1 = "";
    var depCar = "";
    var nameCar = [];

    var content = fs.readFileSync("erada.json");
    var jsonContent = JSON.parse(content);
    for (i=0; i<jsonContent.mps.length; i++) {
        var uuid = uuidv4();
        var depData = jsonContent.mps[i].declarations[0];
        if (depData && depData.transports) {

            name1 = depData.fullname;
            name1 = name1.replace ("'", " ")
        } else {
            name1 = jsonContent.mps[i].surname + " " + jsonContent.mps[i].firstname + " " + jsonContent.mps[i].patronymic;
        }
        if (depData && depData.transports) {
            depCar = "";
            for (a = 0; a < depData.transports.length; a++) {
                var noApostrophe = depData.transports[a].model;
                noApostrophe = noApostrophe.replace ("'", " ");
                if (depData.transports[a].model) {
                    if ((a+1) == depData.transports.length)
                    depCar += noApostrophe + " " + depData.transports[a].year_create;
                    else if (a == 0) depCar +=  noApostrophe + " " + depData.transports[a].year_create + ", ";
                    else depCar += noApostrophe + " " + depData.transports[a].year_create + ", ";
                }
            }
        }
        var sql = "INSERT INTO deputies (guid, fullname, cars) VALUES ('" + uuid + "', '" + name1 + "', '" + depCar + "');"
        client.query (sql, (err, results) => {

        })
        nameCar.push(name1 + depCar);
    }
var html = pug.renderFile('index.pug', {pageData: { name : [nameCar]}});




