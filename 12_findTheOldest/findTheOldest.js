const currYear = new Date().getFullYear();

const findTheOldest = function(people) {
    people.sort(compareAge);
    return people[0];
};

function getAge(person) {
    if (!("yearOfDeath" in person)) {
        return currYear - person["yearOfBirth"];
    }
    return person["yearOfDeath"] - person["yearOfBirth"];
}

function compareAge(a, b) {
    if (getAge(a) > getAge(b)) return -1;
    if (getAge(a) == getAge(b)) return 0;
    if (getAge(a) < getAge(b)) return 1;
}

// Do not edit below this line
module.exports = findTheOldest;
