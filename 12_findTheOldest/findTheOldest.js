const findTheOldest = function(people) {
  const age = [];
  let maxAgePosition = 0;

  for (let i = 0; i < people.length; i++) {
    if (people[i].yearOfDeath === undefined) {
      age.push(new Date().getFullYear() - people[i].yearOfBirth);
    } else {
      age.push(people[i].yearOfDeath - people[i].yearOfBirth);
    }
  }

  for (let i = 0; i < age.length; i++) {
    if (age[i] > age[maxAgePosition]) {
      maxAgePosition = i;
    }
  }

  return people[maxAgePosition];
};

// Do not edit below this line
module.exports = findTheOldest;
