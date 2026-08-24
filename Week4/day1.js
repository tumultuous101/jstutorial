let firstName = 'Daniel';
let channel = 'Codevolution';
let course = 'JavaScript';
let info = `${firstName} is learning ${course} with ${channel}`
console.log(info);


/***
 *- Day 1: Rewrite your Week 2 student object code using destructuring and template literals
- Day 2: Write a function that accepts any number of prices and returns the total using rest parameters
- Day 3: Use spread to merge two objects: `{ name: "Tunde" }` and `{ age: 20, course: "CS" }`
- Day 4: Write a function with default parameters that builds a user profile
- Day 5: Refactor your best Week 1–2 code to use all the ES6 features you've learned
 */

let name = 'Moses';
let age = 20;
let courseOfStudy = 'CS';
let email = 'moses@example.com';

let student = { name, age, courseOfStudy };

// Destructure the values back out of the object
let { name: studentName, age: studentAge, courseOfStudy: studentCourse } = student;

let credentials = `Name: ${studentName}
Age: ${studentAge}
Course: ${studentCourse}
Email: ${email}`;

console.log(credentials);