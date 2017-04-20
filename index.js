 let chalk = require('chalk');

 var data = [3, 5, 6, 'cinq', 67, 'toto', 9];

function sum(data) {
  return data
  .filter(val => typeof val == 'number')
  .reduce((acc, item) => acc + item, 0);
 }

var promise = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 6000, data)
})

promise.then((data) => { console.log(sum(data)) });