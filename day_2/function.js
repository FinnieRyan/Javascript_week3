// use of a function
// function sayHello(greeting, name = 'world'){
//     return `${greeting} ${name}`;
// }

// var output = sayHello('hi', 'Jarrod');
// console.log("output:", output);
// console.log("sayHello without name:", sayHello('Good Morning'));

//------------------
// UNKNOWN FUNCTION
// ------------------

// 5 is  A DEFAULT value in case two arguments arent passed in the print statement 
// var add = function (firstNumber, secondNumber = 5){
// return firstNumber + secondNumber
// }

// console.log('2 + 5 with add():', add(5, 5));

//----------------
//ARROW FUNCTION
// ---------------
// they have an implicit return meaning it doesnt need  a return and can be done on one line as well 
//var multilpy = (firstNumber, secondNumber) => firstNumber  * secondNumber 
//ONLY FOR 1 LINE 

var multilpy = (firstNumber, secondNumber) =>{ 
return firstNumber * secondNumber;
}
console.log('multiply 2 by 5', multilpy(2, 5))