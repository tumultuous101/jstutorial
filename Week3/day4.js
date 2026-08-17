//Day 4: Create an object representing a student (name, age, course, GPA) and write a function that prints a summary sentence about them

const Moses = {
  name : "Moses Daniel",
  age : 19,
  course : "Computer Science",
  GPA : 4.14
}
function yapAboutStudent(Moses) {
  console.log(`${Moses.name} is ${Moses.age}, currently enrolled in ${Moses.course} and currently has a gpa of ${Moses.GPA}`);
}
yapAboutStudent(Moses);

/**const students = [
  {
    name : "Moses Daniel",
    age : 19,
    course : "Computer Science",
    GPA : 4.14
  }
];

function whoIsTheBest (students){

}
*/