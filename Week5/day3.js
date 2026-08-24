function name() {
  return new Promise(resolve =>
    setTimeout(() => resolve('Moses'), 1000)
  );
}
function age() {
  return new Promise(resolve =>
    setTimeout(() => resolve(19), 2000)
  );
}
function courseOfStudy() {
  return new Promise(resolve =>
    setTimeout(() => resolve('CS'), 3000)
  );
}

async function showDetails() {
  const [myName, myAge, myCourse] = await Promise.all([
    name(),
    age(),
    courseOfStudy()
  ]);
  console.log(`My name is ${myName}, I am ${myAge} years old, and I am studying ${myCourse}.`);
}

showDetails();