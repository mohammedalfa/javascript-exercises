const palindromes = function (string) {
    let stringArray = Array.from(string.toLowerCase());
    let letterArray = stringArray.filter((char) => char.match(/[a-z]/i));
    let forward = letterArray.join("");
    let reverse = letterArray.reverse().join("");
    return forward === reverse;
};

// Do not edit below this line
module.exports = palindromes;
