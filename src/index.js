var  uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');

//var getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
}; 