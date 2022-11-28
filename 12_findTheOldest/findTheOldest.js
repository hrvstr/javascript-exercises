const findTheOldest = function (array) {
  const date = new Date();
  const currentYear = date.getUTCFullYear();
  array.sort((a, b) => {
    let aAge = (a.yearOfDeath ? a.yearOfDeath : currentYear) - a.yearOfBirth;
    let bAge = (b.yearOfDeath ? b.yearOfDeath : currentYear) - b.yearOfBirth;
    if (aAge > bAge) {
      return -1;
    } else if (aAge < bAge) {
      return 1;
    }
    return 0;
  });
  return array[0];
};

// solution that uses the reduce method

// function getAge(birth, death) {
//   if (!death) {
//     return new Date().getFullYear() - birth;
//   } else {
//     return death - birth;
//   }
// }

// const findTheOldest = function (array) {
//   return array.reduce((oldest, currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(
//       currentPerson.yearOfBirth,
//       currentPerson.yearOfDeath
//     );
//     return oldestAge > currentAge ? oldest : currentPerson;
//   });
// };

// Do not edit below this line
module.exports = findTheOldest;
