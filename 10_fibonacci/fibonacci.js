const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) {
        return "OOPS";
    }
    if (num === 0) {
        return 0;
    }
    let a = 0, b = 1, curr;
    for (let i = 1; i < num; ++i) {
        curr = a + b;
        a = b;
        b = curr;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
