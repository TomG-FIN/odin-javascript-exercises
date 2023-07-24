const sumAll = function(firstNumberArg, lastNumberArg) {

    if (firstNumberArg < 0 || lastNumberArg < 0) return "ERROR";
    if (typeof firstNumberArg !== 'number') return "ERROR";
    if (typeof lastNumberArg !== 'number' ) return "ERROR";

    if (firstNumberArg > lastNumberArg) {
        let switchVar = firstNumberArg;
        firstNumberArg = lastNumberArg;
        lastNumberArg = switchVar;
    }

    let totalSum = 0;

    for (i = firstNumberArg; i <= lastNumberArg; i++ ) {
        
        totalSum += i;

    }


return totalSum;

};

//console.log(sumAll(1,4)) // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
