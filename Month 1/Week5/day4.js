function name() {
  return new Promise(resolve =>
    setTimeout(() => resolve('Moses'), 1000)
  );
}

function breakOnPurpose() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Intentional error')), 1500);
  });
}

function courseOfStudy() {
  return new Promise(resolve =>
    setTimeout(() => resolve('CS'), 3000)
  );
}

async function showDetailsWithErrorHandling() {
  try {
    const [myName, myAge, myCourse] = await Promise.all([
      name(),
      breakOnPurpose(), // swapped in for age() — this one WILL reject
      courseOfStudy()
    ]);
    console.log(`My name is ${myName}, I am ${myAge} years old, and I am studying ${myCourse}.`);
  } catch (error) {
    console.error('Error occurred while fetching details:', error.message);
  }
}

showDetailsWithErrorHandling(); 