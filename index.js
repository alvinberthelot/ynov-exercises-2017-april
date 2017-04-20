let chalk = require('chalk');
let Rx = require('rxjs');


var data = [3, 5, 6, 'cinq', 67, 'toto', 9];


var dataObservable = Rx.Observable.create(function(observer) {
  var tmp = -1;
  var inter = setInterval(()=> {
    if(++tmp < data.length){
      observer.next(data[tmp]);
    }
  } , 500);
  setTimeout(()=> {
    observer.complete();
    clearInterval(inter)
  } , 4000);
});


console.log('OBSERVATEUR 1\n');

dataObservable
  .subscribe(value => {
    console.log('Observateur 1 : ' + value);
  });

console.log('\n');


console.log('OBSERVATEUR 2\n');

dataObservable
  .filter(val => typeof val == 'number')
  .reduce((acc, item) => {
    if (typeof item !== 'number') {
      throw(new Error('ceci n\'est pas un nombre !!!'));
    }
    return acc + item
  }, 0)
  .subscribe(
    value => {

      console.log('Observateur 2 : ' + value)
    },
    error => {console.log(error)},
    () => { console.log('Cette donnée a été calculée à partir de 4 chiffres')})

console.log('\n');


