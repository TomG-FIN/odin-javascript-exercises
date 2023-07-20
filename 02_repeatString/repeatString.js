const repeatString = function(inputString, numberofTimes) {

    const holderArray = []
    if (typeof numberofTimes !== 'number') numberofTimes = 1; // Number sanity check
    if (numberofTimes < 0) return "ERROR";
    if (inputString === "") inputString = "";
    for (i = 0; i < numberofTimes; i++){
        holderArray.push(inputString);
    }
    console.log(holderArray)
    return holderArray.join("")
};

// Do not edit below this line
module.exports = repeatString;
