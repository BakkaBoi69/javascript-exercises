const findTheOldest = function(people) {
    let maxAge = -1, oldestPerson;
    people.forEach(person => {
        if (person.yearOfDeath == undefined) {
            maxAge = new Date().getFullYear() - person.yearOfBirth;
            oldestPerson = person;
        }
        else if ((person.yearOfDeath - person.yearOfBirth) > maxAge) {
            maxAge = person.yearOfDeath - person.yearOfBirth;
            oldestPerson = person;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
