const reverseString = function(string) {
    let stringArray = string.split("");
    let tmp = '';
    for (let i = 0, n = string.length; i < n / 2; i++) {
        tmp = stringArray[i];
        stringArray[i] = stringArray[n - i];
        stringArray[n - i] = tmp;
    }
    return stringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
