const convertToCelsius = function(tempToBeConverted) {

  // Formula °F to °C
  // x °F ≘ (x − 32) × 5/9 °C
  
  afterConversionNum = (tempToBeConverted - 32) * (5/9)
  afterConversionNum = Math.round(afterConversionNum * 10) / 10
  return afterConversionNum
};

const convertToFahrenheit = function(tempToBeConverted) {

//x °C ≘ (x × 9/5 + 32) °F
afterConversionNum = (tempToBeConverted * (9/5) + 32)
afterConversionNum = Math.round(afterConversionNum * 10) / 10
return afterConversionNum


};




//console.log(convertToCelsius(32)) // fahrenheit to celsius, should return 0
//console.log(convertToFahrenheit(0)) // celsius to fahrenheit, should return 32



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
