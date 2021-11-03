var chickens = [
    { name: "Margaret", age: 2, eggs: 0 },
    { name: "Hetty", age: 1, eggs: 2 },
    { name: "Henrietta", age: 3, eggs: 1 },
    { name: "Audrey", age: 2, eggs: 0 },
    { name: "Mabel", age: 0.5, eggs: 1 },
  ]

var countEggs = function (array){
    var totalEggs = 0;

    for (var bird of array){
        // totalEggs = totalEggs + bird.eggs;
        totalEggs += bird.eggs; //.eggs is the keyword so it knows to target eggs in the array 
        bird.eggs = 0; //eggs have been collected 
    }
    return `${totalEggs} eggs collected`
}

var findChickenByName = function (array, name){

    for (var chicken of array) {
        if(chicken.name === name){
        return chicken;
        } 
    }
    return "no chicken found!";
}

console.log(findChickenByName(chickens, "Audrey"));
console.log(findChickenByName(chickens ,"Hetty"));
