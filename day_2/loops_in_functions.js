// var chickens = [
//     { name: "Margaret", age: 2, eggs: 0 },
//     { name: "Hetty", age: 1, eggs: 2 },
//     { name: "Henrietta", age: 3, eggs: 1 },
//     { name: "Audrey", age: 2, eggs: 0 },
//     { name: "Mabel", age: 0.5, eggs: 1 },
//   ]

// var countEggs = function (array){
//     var totalEggs = 0;

//     for (var bird of array){
//         // totalEggs = totalEggs + bird.eggs;
//         totalEggs += bird.eggs; //.eggs is the keyword so it knows to target eggs in the array 
//         bird.eggs = 0; //eggs have been collected 
//     }
//     return `${totalEggs} eggs collected`
// }

// var findChickenByName = function (array, name){

//     for (var chicken of array) {
//         if(chicken.name === name){
//         return chicken;
//         } 
//     }
//     return "no chicken found!";
// }

// console.log(findChickenByName(chickens, "Audrey"));
// console.log(findChickenByName(chickens ,"Hetty"));

//--------------
//LAB
//--------------
// Create the following functions and test them by logging out their return value.

// MVP

// Part 1

var myNumbers = [1,2,3,4,5,6,7,8]

// 1.a Total the numbers - Create a function that takes in an array of numbers as an argument and calculates the sum of the array's numbers.

var calculateTotal = function (array){
    var runningTotal = 0
    for (var number of array){
         runningTotal += number;
    }
    return runningTotal
}
// 1.b Find the evens - Create a function that takes in an array of numbers as an argument and returns a new array containing just the even numbers.
// Hint: google the modulo operator in javascript
var getEvens = ( array) => {
    var evens = [];

    for(var number of array){
        if (number % 2 === 0){
         evens.push(number);
        }
    }
    return evens
}
console.log(getEvens(myNumbers))

// Part 2

var myBill = [
  {
    meal: 'Green Curry',
    price: 10,
    customer: 'Sally'
  }, {
    meal: 'Sea Bass',
    price: 12,
    customer: 'Upul'
  }, {
    meal: 'Fish and Chips',
    price: 10,
    customer: 'Rita'
  }, {
    meal: 'Stick Toffee Pudding',
    price: 4,
    customer: 'Upul'
  }, {
    meal: 'Apple Pie',
    price: 5,
    customer: 'Sally'
  }
]

// 2.a. Total the bill - Create a function that takes in a bill as an argument and calculates the total cost of the bill.
var billTotal = function(bill){
    var total = 0
    for (var item of bill){
        total += item.price;
        
    }
    return total

}
 console.log(billTotal(myBill))

// 2.b. Find meals by customer name - Create a function that takes in a bill and a customer name as an argument and returns a new array containing all the items for that customer.
var customerBill = function(bill, customer){
    individualBill = [];
    for (var item of bill){
    if(item.customer === customer){
    individualBill.push(item)
    }  
    
}
    return individualBill;
}


// 2.c. Using the functions you wrote in part 4 and 5, find the total that Sally spent.
var sallysBill = customerBill(myBill, "Sally");
console.log(billTotal(sallysBill))

// 2.d. Find average item price - Create a function that takes in bill as an argument and calculates the average price of all the items.
 
// Extension

// Part 3
// Have a look at the following bodyBuilder object.

var bodyBuilder = {
  strength: 2,
  workOut: (mins) => {
   bodyBuilder.strength = bodyBuilder.strength * mins;
  },
  lazeAbout:function(hours){
      bodyBuilder.strength = bodyBuilder.strength / hours
  }
}

// 3.a. Log out the the bodyBuilder's strength - the value should be 2.
console.log(bodyBuilder.strength)
// 3.b. Use the workOut function to update the bodyBuilder's strenth.
bodyBuilder.workOut(10)
console.log(bodyBuilder.strength)
// 3.c. Create another function on the bodyBuilder called `lazeAbout`, that takes in a number of hours as an argument. Decrease the bodyBuilder's strength by dividing the strength by the number of hours.
bodyBuilder.lazeAbout(2)
console.log(bodyBuilder.strength)