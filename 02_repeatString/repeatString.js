const repeatString = function(inputStr, num) {
    if (num < 0) {
        return "ERROR";
    }
    let result = "";
    for (let i = 0; i < num; ++i) {
        result += inputStr;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
