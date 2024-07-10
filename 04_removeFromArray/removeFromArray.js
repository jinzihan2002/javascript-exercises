const removeFromArray = function(inputArr, ...elements) {
    for (const element of elements) {
        let index = inputArr.indexOf(element)
        while (index != -1) {
            inputArr.splice(index, 1);
            index = inputArr.indexOf(element)
        }
    }
    return inputArr;
};

// Do not edit below this line
module.exports = removeFromArray;
