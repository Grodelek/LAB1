// Zad 1.
// const wait = 3000;
// console.log(wait);
// setTimeout(function(){
//     console.log("Uplynely minimum 3 sek...")
// }, wait);
// console.log("Koniec skryptu")

// Zad 2.1
// const  fs = require("fs");
// const data = fs.readFileSync('package.json')
//
// console.log("Poczatek skryptu.");
// console.log(data.toString());
// console.log("Koniec skryptu");

// Zad 2.2
// const fs = require("fs");
// console.log("Poczatek skryptu.");
// fs.readFile('package.json', function(err, data){
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
// console.log("Koniec skryptu");

// Zad 3
const http = require('http');
const path = require("path");
const util = require("util");
const v8 = require("v8");
const hostname = '127.0.0.1';
const port = 8888;
const moment = require('moment');
const now = moment();
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');

    response.end('Hello,from node.js serwer !\n'+ now.format());
});
server.listen(port, hostname, () => {
    util.log(v8.getHeapStatistics());
    console.log(path.basename(__filename));
    util.log(path.join(__dirname, 'uploads','images'));
    console.log(`Server  running at http://${hostname}:${port}/`);
});