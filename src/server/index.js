const data = require('./ipl.js')
const fs = require('fs')
const matchList=require('./matches.json');
const deliveriesList=require('./deliveries.json');

var module1 = data.noOfMatchesPlayedPerYear(matchList);
var module2 = data.noOfMatchesWonPerYear(matchList);
var module3 = data.extraRunsConceeded(matchList,deliveriesList);
var module4 = data.top10EconomicalBowlers(matchList,deliveriesList)




// stringify JSON Object
var jsonContent = JSON.stringify(module1, null, 2);
fs.writeFile("../output/matchesPerSeason.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
    }
    console.log("JSON file has been saved.");
});


// stringify JSON Object
var jsonContent = JSON.stringify(module2, null, 2);
fs.writeFile("../output/MatchesWonPerYear.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
    }
    console.log("JSON file has been saved.");
});


// stringify JSON Object
var jsonContent = JSON.stringify(module3, null, 2);
fs.writeFile("../output/extraRunsConceeded.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
    }
    console.log("JSON file has been saved.");
});



// stringify JSON Object
var jsonContent = JSON.stringify(module4, null, 2);
fs.writeFile("../output/top10EconomicalBowlers.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
    }
    console.log("JSON file has been saved.");
});