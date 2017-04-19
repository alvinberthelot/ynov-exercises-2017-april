let chalk = require('chalk');
let Rx = require('rxjs');

var dataObservable = Rx.Observable.create(function(observer){
  observer.next(3);
  observer.next(5);
  observer.next(6);
  observer.next('cinq');
  observer.next('67');
  observer.next('toto');
  observer.next(9);
  observer.complete();
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
  .reduce((acc, item) => acc + item, 0)
  .subscribe(value => {
    console.log('Observateur 2 : ' + value);
  })
console.log('\n');
