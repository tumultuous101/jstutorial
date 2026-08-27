
  function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
let celsius = Number(prompt("Enter temperature in Celsius:"));
let fahrenheit = celsiusToFahrenheit(celsius);
alert(`${celsius}°C is equal to ${fahrenheit}°F`);