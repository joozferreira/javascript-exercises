const findTheOldest = function(people) {
  const age = people.map((item) => {
    return item.yearOfDeath
    ? item.yearOfDeath - item.yearOfBirth
    : new Date().getFullYear() - item.yearOfBirth;
  });

  let maxAgePosition = age.indexOf(Math.max(...age));

  return people[maxAgePosition];
};

// Do not edit below this line
module.exports = findTheOldest;
