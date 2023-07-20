const reverseString = function(inputString) {

const forwardArray = inputString
const reversedArray = [] 

for (i = 1; i <= forwardArray.length; i++){
    //console.log(forwardArray[i])
    reversedArray[i] = forwardArray[forwardArray.length - i]
}
return reversedArray.join("")
};
console.log(reverseString("hello"))
// Do not edit below this line
module.exports = reverseString;
