const Moses = {
  name : "Moses Daniel",
  age : 19,
  course : "Computer Science",
  GPA : 4.14
}
const Rashidat = {
  name : "Rashidat Basira",
  age : 23,
  course : "Industrial Science",
  GPA : 1.4
}
const Bolu = {
  name : "Ogunmepon Bolu",
  age : 18,
  course : "Computer Science",
  GPA : 3.17
}
const Tolani = {
  name : "Tolani Joshua",
  age : 19,
  course : "Toxicology",
  GPA : 4.9
}
const Sherrif = {
  name : "Sherrif Boniface",
  age : 30,
  course : "Computer Science",
  GPA : 0.4
}

const students = [Moses, Rashidat, Bolu, Tolani, Sherrif]

function whoIsTheBest(students) {
  return students.reduce((best, current) => {
    if (current.GPA > best.GPA) {
      return current;
    } else {
      return best;
    }
  });
}

const thereCanOnlyBe1 = whoIsTheBest(students);
console.log(`${thereCanOnlyBe1.name} has the highest GPA: ${thereCanOnlyBe1.GPA}`);