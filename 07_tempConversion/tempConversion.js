const roundToOne = function(num) {
  return Math.round(num * 10) / 10;
}

const convertToCelsius = function(tempF) {
  return roundToOne((tempF - 32) * 5 / 9);
};

const convertToFahrenheit = function(tempC) {
  return roundToOne(tempC * 9 / 5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
