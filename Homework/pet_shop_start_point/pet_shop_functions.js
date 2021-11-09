myFunctions = {
  // Write your functions here


  getName(animalName) {
    return animalName.name;
  },

  getTotalCash(money){
    return money.admin.totalCash;
  },

  addOrRemoveCash(object, money){
    return object.admin.totalCash += money;
  },
    
  getPetsSold(animal){
    return animal.admin.petsSold
  },

  increasePetsSold(animal, totalPets){
    return animal.admin.petsSold += totalPets;
  },

  getStockCount(petStock){
   return petStock.pets.length;
  },
    
  getPetsByBreed(animal, breed){
    var countBreed = [];
   //loops through all the pets in the pet array trying to find the correct breed for the correct pet 
    for(let pet of animal.pets){
      if(pet.breed === breed){
        countBreed.push(pet);
      }
    }
    //returns zero if name isnt found in the loop 
    return countBreed.length;
  },

  getPetByName(animal, petName){
    //variable for pet of array
    var species;
    //loops through array pets until its finds the correct pet name
    for(let pet of animal.pets){
      if(pet.name === petName){
        //if condidition is true assign pet to var species 
        species = pet;
      }
    }
    return species;
  },

  removePetByName(animal, petName){
    //creating an array that is one index smaller than pets and looping in decending order
    for(var i = animal.pets.length-1; i >= 0; i--){
      if(animal.pets[i].name === petName){
        //at position of the index remove the name from the array 
        animal.pets.splice(i, 1);
      }
    }
  },

  addPetToStock(animal, additionalAnimal){
    animal.pets.push(additionalAnimal);
  },

  getCustomersCash(person){
    return person.cash;
  },

  getCustomersCashTotal(people){
    //setting total cash count to zero 
    var totalCashCount = 0
    //looping through the customers and taking cash and adding it to the total cash count variable
    for(let person of people){
      totalCashCount += person.cash;
    }
    return totalCashCount;
  },

  removeCustomerCash(person, paymentMade){
    return person.cash -= paymentMade;
  },

  getCustomerPetCount(person){
    return person.pets.length;
  },

  addPetToCustomer(person, addPet){
    person.pets.push(addPet);
  }




};

module.exports = myFunctions;
