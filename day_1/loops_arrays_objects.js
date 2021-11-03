//arrays - unordered collection using an index position 
//objects (other languages call these dictionaries, hashes, hashmaps) 
//objects (cont)- unordered collection use a key value pair- eg name: "john"

// --------------
// ARRAYS!!!!
// ----------------

//var sports = ["football", "tennis","rugby"];
//var numberOfElements = sports.length;
//console.log('number of elements:', numberOfElements);

// -----------------------
// LOOPS !!!!
//------------------------

// var sports = ["football", "tennis","rugby",'golf'];

// for (var currentSport of sports){
//     var uppercasedSport = currentSport.toUpperCase();
//     console.log(uppercasedSport);
// }
// //for (initialiseCounter; true/false condition; incrementCounter)
// for (var i = 0; i < sports.length; i++){
//     var currentSport = sports[i];
// //    = var uppercasedSport = currentSport.toUpperCase();
//     console.log(uppercasedSport);
// }

// ------------------
// OBJECTS!!!!!
// -------------------

var movie = {
    title: "Its a Wonderful Life",
    year: 1946,
    language: "Spanish"
};
// cast adding values to the object 
movie.cast = ["james Stewart", "Donna Reed"];
console.log('movie', movie);

movie.ratings = {
    critic: 94,
    audience: 95
}
