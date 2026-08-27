function biggerNum(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is bigger than " + num2);
  } else if (num2 > num1) {
    console.log(num2 + " is bigger than " + num1);
  } else {
    console.log(num1 + " is equal to " + num2);
  }
}
num1 = 10;
num2 = 20;
biggerNum(num1, num2);
console.log("The bigger number is: " + Math.max(num1, num2));
/** The first code above is for browser console, the one below is for Terminal(Node.js) */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (answer1) => {
  rl.question('Enter second number: ', (answer2) => {
    const num1 = parseInt(answer1);
    const num2 = parseInt(answer2);
    biggerNum(num1, num2);
    rl.close();
  });
});