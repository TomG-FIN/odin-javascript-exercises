const leapYears = function(inputYear) {


if (inputYear % 4 === 0){

    if (inputYear % 100 === 0 && inputYear % 400 !== 0){
        return false;
    }

    return true;
}

return false;

};


//console.log(leapYears(2000)) // True
//console.log(leapYears(1985)) // is not a leap year: returns false
//console.log(leapYears(1900)) // is not a leap year: returns false

// Do not edit below this line
module.exports = leapYears;
