
let car = 'Tesla';
  let model = 'Model S';
    let year = 2022;
      let color = 'Red';
 
let bike = 'Ducati';
  let bikeModel = 'Panigale V4';
    let bikeYear = 2021;
      let bikeColor = 'Black';

let carDetails = {car, model, year, color};
  let bikeDetails = {bike, bikeModel, bikeYear, bikeColor};
    let vehicleDetails = { ...carDetails, ...bikeDetails };

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showVehicles() {
  await delay(500);
  console.log(bikeDetails);

  await delay(500);
  console.log(carDetails);

  await delay(500);
  console.log(vehicleDetails);
}

showVehicles();

  
  async function showVehicles() {
  const bike = await Promise.resolve(bikeDetails);
  console.log(bike);

  const car = await Promise.resolve(carDetails);
  console.log(car);

  const vehicle = await Promise.resolve(vehicleDetails);
  console.log(vehicle);
}

showVehicles();

function getBikeDetails() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(bikeDetails), 500);
  });
}

function getCarDetails() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(carDetails), 500);
  });
}

async function showVehicles() {
  const bike = await getBikeDetails();
  console.log(bike);

  const car = await getCarDetails();
  console.log(car);

  const vehicle = await Promise.resolve(vehicleDetails);
  console.log(vehicle);
}

showVehicles();
