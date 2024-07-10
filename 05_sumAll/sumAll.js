const sumAll = function(num1, num2) {
    if (num1 <= 0 || num2 <= 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    let smaller, larger;
    if (num1 > num2) {
        larger = num1;
        smaller = num2;
    } else {
        larger = num2;
        smaller = num1;
    }
    num1 = smaller;
    while (smaller < larger) {
        num1 += ++smaller;
    }
    return num1;
};

// Do not edit below this line
module.exports = sumAll;
