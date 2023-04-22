const removeFromArray = function(array, ...elements) {
    for (let i = 0, n = array.length; i < n; i++) {
        if (elements.includes(array[i])) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
