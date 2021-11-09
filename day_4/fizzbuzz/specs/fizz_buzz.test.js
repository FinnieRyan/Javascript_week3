const fizzBuzz = require('../fizz_buzz.js');

//it takes in a string which describes the module of code tested 
describe('fizzbuzz', () => {
    test('when given 3 returns "Fizz"', () => {
    // actualValue = fizzbuzz(3);
       // expectedValue = 'Fizz';
       // expect(actualValue).toEqual(expectedValue);
       expect(fizzBuzz(3)) .toEqual('Fizz');
    });

    test('when given 5 returns "Buzz"', () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
        });
    
    test('when given 15 returns "FizzBuzz"', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
       });

    test('when given 1, returns "1"', () => {
    expect(fizzBuzz(1)).toEqual('1');
           });
     }); 


