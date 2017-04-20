 let chalk = require('chalk');
 var _ = require('lodash');

 var data = [3, 5, 6, 'cinq', 67, 'toto', 9];

function sum(data) {
  return data
  //.filter(val => typeof val == 'number')
  .reduce((acc, item) => acc + item, 0);
 }

var promise = new Promise(function (fulfill, reject) {
  if(_.every(data, val => typeof val == 'number')){
    setTimeout(fulfill, 3000, data)
  }
  else {
    setTimeout(reject, 1000, 'chiffres KO')
  }

})


promise.then(
  (data) => {
    console.log(sum(data));
  },
  (msgError) => {
    console.log(msgError);
  }
);


