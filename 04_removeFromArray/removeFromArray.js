// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

const removeFromArray = function(inputArray, ...removableList) {

    let noOfArgsToRemove = removableList.length;
    let finalArray = [];

    for (let i = 0; i < noOfArgsToRemove; i++){

        let toBeRemovedItemIndex = inputArray.indexOf(removableList[i]);
            delete inputArray[toBeRemovedItemIndex];

    }

    inputArray = inputArray.filter( Boolean );
    return inputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
