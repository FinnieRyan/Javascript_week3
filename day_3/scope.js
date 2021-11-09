var name = "John";

var secretsFunction = function() {
    var pinCode = [0, 0, 0, 0];
    console.log('pinCode inside function:', name);
    
}

secretsFunction();
console.log('name inside function:', name);


var filterNamesByFirstLetter = function (names, letter){
    var filteredNames = [];
    for (var name of names){
      if (name[0] === letter){
        filteredNames.push(name);
      }
    }
    return filteredNames
  }
  
  var students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs'];
  var filteredStudents = filterNamesByFirstLetter(students, 'B');
  console.log('filteredStudents:', filteredStudents)

  let isItFive = function(number){
      let result;
      if(number===5){
          result = true;
      } else{
          result = false;
      }
      return result
  }
  console.log(isItFive(5));