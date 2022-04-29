function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

module.exports.fahrenheitToCelsius = function (fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
};


console.log(process.env.PWD);

//a Change to working directory with cd (working directory /React) and then use node my-app.js to execute this file