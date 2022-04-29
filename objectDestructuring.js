/* celsius-to-fahrenheit.js */
const { celsiusToFahrenheit } = require("./my-app.js");

const celsiusInput = process.argv[2];
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(
  `${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`
);

/* $ node celsius-to-fahrenheit.js 100
100 degrees Celsius = 212 degrees Fahrenheit */