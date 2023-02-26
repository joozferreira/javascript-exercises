const findTheOldest = function(people) {
  // creation of an array with the age of each of the elements of array people
  const age = people.map((item) => {
    return item.yearOfDeath
      ? item.yearOfDeath - item.yearOfBirth
      : new Date().getFullYear() - item.yearOfBirth;
  });

  // Math.max(...age) will retrieve the max within the age array
  // .indexOf gives the position of that max age
  let maxAgePosition = age.indexOf(Math.max(...age));

  // We can now return the person for the index with highest age
  return people[maxAgePosition];
};

// Do not edit below this line
module.exports = findTheOldest;
