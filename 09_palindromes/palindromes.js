const palindromes = function (input) {
    input = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = input.length - 1;
    while (left < right) {
        if (input[left] !== input[right]) {
            return false;
        }
        ++left;
        --right;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
