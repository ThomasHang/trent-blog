const PENDING = 'pending';

const person = {
  name: 'chutianhang',
  son: {
    name: 'tt',
  },
};
console.log(person['name']); //chutianhang
console.log(person['son']['name']); //chutianhang

function doSomething(){}
console.log( doSomething.prototype );
// It does not matter how you declare the function, a
//  function in javascript will always have a default
//  prototype property.
var doSomething = function(){};
console.log( doSomething.prototype );

