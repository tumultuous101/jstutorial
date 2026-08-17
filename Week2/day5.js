function printProfile(name, age, course) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Course:", course);
}

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return `${number} is even.`;
  }

  return `${number} is odd.`;
}


  function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
let celsius = Number(prompt("Enter temperature in Celsius:"));
let fahrenheit = celsiusToFahrenheit(celsius);
alert(`${celsius}°C is equal to ${fahrenheit}°F`);

/**
 *Note - The console.log for day 5 won't run shit in the terminal because the code was written for a browser environment and not in a Node.js environment. The console.log statements are included for demonstration purposes and will work when the code is run in a Node.js environment.
 */

console.log("Day 1");
printProfile("Your Name", 20, "JavaScript Basics");

console.log("\nDay 2");
console.log(checkEvenOdd(7));

console.log("\nDay 3");
printNumbersSkippingMultiplesOfThree();

console.log("\nDay 4");
console.log(`25°C = ${convertToFahrenheit(25)}°F`);
