const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    oldest = people.sort((a, b) => {
        let aAge = ((a.yearOfDeath) ? a.yearOfDeath : currentYear) - a.yearOfBirth;
        let bAge = ((b.yearOfDeath) ? b.yearOfDeath : currentYear) - b.yearOfBirth;
        if (aAge > bAge) return 1
        else return -1;
    });
    return oldest.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
