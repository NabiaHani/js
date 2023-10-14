// PRACTICE EXERCISE 2.1
// 1. What are the types of these variables listed below? Verify this with typeof and 
// output the result to the console:
// let str1 = 'Laurence'; 
// let str2 = "Svekis"; 
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000

let str1 = 'Laurence'; 
let str2 = "Svekis"; 
let val1 = undefined;
let val2 = null;
let myNum = 1000;
console.log(typeof str1);
console.log(typeof str2);
console.log(typeof val1);
console.log(typeof val2); 
console.log(typeof myNum);



// PRACTICE EXERCISE 2.2
// Create a variable for your name, another one for your age, and another one for 
// whether you can code JavaScript or not.
// Log to the console the following sentence, where name, age and true/false are 
// variables:
// Hello, my name is Maaike, I am 29 years old and I can code JavaScript: 
// true


let name = "Nabia";
let age = 20;
let canCodeJavaScript = true;

console.log(`My name is ${name}, I am ${age} years old, and I can code JavaScript: ${canCodeJavaScript}`);



// PRACTICE EXERCISE 2.3
// Write some code to calculate the hypotenuse of a triangle using the Pythagorean 
// theorem when given the values of the other two sides. The theorem specifies that the 
// relation between the sides of a right-angled triangle is a2+b2=c2.
// You can use prompt() to get the value for a and b. Write code to get the value from 
// the user for a and b. Then square the values of both a and b before adding them 
// together and finding the square root. Print your answer to the console



// Get the values of the two other sides (a and b) from the user
let a = parseFloat(prompt("Enter the value of side 'a':"));
let b = parseFloat(prompt("Enter the value of side 'b':"));

// Check if the input is valid (non-empty and numeric)
if (isNaN(a) || isNaN(b)) {
  console.log("Invalid input. Please enter valid numeric values for sides 'a' and 'b'.");
} else {
  // Calculate the hypotenuse using the Pythagorean theorem
  let hypotenuse = Math.sqrt(a ** 2 + b ** 2);

  // Print the result to the console
  console.log(`The hypotenuse of the triangle with sides 'a'=${a} and 'b'=${b} is: ${hypotenuse}`);
}




// PRACTICE EXERCISE 2.4
// Create variables for three numbers: a, b, and c. Update these variables with the 
// following actions using the assignment operators:
// • Add b to a
// • Divide a by c
// • Replace the value of c with the modulus of c and b
// • Print all three numbers to the console


let x = 24; // You can set your own initial values for a, b, and c
let y = 8;
let z = 2;

// Add y to x
x += y;

// Divide x by z
x /= z;

// Replace the value of c with the modulus of z and y
z %= y;

// Print all three numbers to the console
console.log(`a: ${x}`);
console.log(`b: ${y}`);
console.log(`c: ${z}`);




// Chapter Project

// miles-to-kilometer project
// Create a variable that contains a value in miles, convert it to kilometers, and log the 
// value in kilometers in the following format: 
// The distance of 130 kms is equal to 209.2142 mile

let miles =(prompt ("Enter the value of mile"));
let kilometers = miles * 1.609344;

console.log(`The distance of ${kilometers.toFixed(4)} kms is equal to ${miles} miles`);




// BMI calculator
// Set values for height in inches and weight in pounds, then convert the values to 
// centimeters and kilos, outputting the results to the console:
// • 1 inch is equal to 2.54 cm
// • 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) 
// divided by squared height (in meters). Output the results to the console



// Get values for height in inches and weight in pounds from the user
let heightInInches = parseFloat(prompt("Enter your height in inches:"));
let weightInPounds = parseFloat(prompt("Enter your weight in pounds:"));

// Conversion factors
const inchesToCentimeters = 2.54;
const poundsToKilos = 0.45359237;

// Convert height to centimeters and weight to kilograms
let heightInCentimeters = heightInInches * inchesToCentimeters;
let weightInKilos = weightInPounds * poundsToKilos;

// Calculate BMI
let heightInMeters = heightInCentimeters / 100; // Convert height to meters
let bmi = weightInKilos / (heightInMeters * heightInMeters);

// Output the results
console.log(`Height: ${heightInInches} inches is equal to ${heightInCentimeters} cm`);
console.log(`Weight: ${weightInPounds} pounds is equal to ${weightInKilos} kg`);
console.log(`BMI: ${bmi.toFixed(2)}`);






