let chalk = require('chalk');
let Rx = require('rxjs');

// var dataObservable = Rx.Observable.create(function(observer) {
//   observer.next(3);
//   observer.next(5);
//   observer.next(6);
//   observer.next('cinq');
//   observer.next('67');
//   observer.next('toto');
//   observer.next(9);
//   observer.complete();
// });

var dataObservable = Rx.Observable
  .from([3, 5, 6, 'cinq', '67', 'toto', 9])
  .zip(Rx.Observable.interval(1000), (value, index) => value);

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
    value => { console.log('Observateur 2 : ' + value)},
    error => {console.log(error)},
    () => { console.log('Cette donnée a été calculée à partir de 4 chiffres')})
console.log('\n');
