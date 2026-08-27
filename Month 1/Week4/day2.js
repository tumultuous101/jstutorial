const sum = (...numbers) => {
  let totalOfPrices = 0;
  numbers.forEach(number => totalOfPrices += number);
  return totalOfPrices;
}
/**
  // Object 1
let name = 'Moses';
let age = 19;
let courseOfStudy = 'CS';
let allDetails = { name, age, courseOfStudy };
const mergedDetails = {...allDetails}
// Object 2
let sex = 'Male';
let race = 'African';
let allDetails2 = {sex, race}
let mergedDetails2 = {...allDetails2}

const output = `Name: ${mergedDetails.name}Age: ${mergedDetails.age}
Course: ${mergedDetails.courseOfStudy}. His sex is ${mergedDetails2.sex}, and his race is ${mergedDetails2.race}`;
 */

// Second Attempt 
let name = 'Moses';
let age = 19;
let courseOfStudy = 'CS';
let sex = 'Male';
let race = 'African';

let allDetails = { name, age, courseOfStudy };
let moreDetails = { sex, race };

// This is the actual merge — one new object made from two
const mergedDetails = { ...allDetails, ...moreDetails };

const output = `Name: ${mergedDetails.name}
Age: ${mergedDetails.age}
Course: ${mergedDetails.courseOfStudy}. His sex is ${mergedDetails.sex}, and his race is ${mergedDetails.race}`;

console.log(output);

// Day 4: Write a function with default parameters that builds a user profile

/*
  async function getData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
*/

