// unit testing
//  - basic unit test 
//  - advanced unit test


// Test driven development
//   - RED (before I write code) 
//   - GREEN (after I write code) 
//   - REFACTOR (cleanup)

function assertEqual(expected, actual) {
	if (expected === actual) {
		console.log(".");
	} else {
		console.log("F");
		console.log("Expected: " + expected + " but got: " + actual);
		console.log();
	}
}

function greetingGenerator(name) {
	var greeting = "Hello"
	return greeting + " " + name + "!";
}

function add(x, y){
	return x+y;
}

function sub(x, y){
	return x - y;
}

function goodMorning(name){
	var greet = "Good morning, ";
	return greet + name + ".";
}


var steve = greetingGenerator("Steve");
assertEqual("Hello Steve!", steve);
var kat = greetingGenerator("Kat");
assertEqual("Hello Kat!", kat);

var sum1 = add(1, 45);
assertEqual(46, sum1);

var sum2 = sub(4,2);
assertEqual(2, sum2);

assertEqual("Good morning, Kat.", goodMorning("Kat"));