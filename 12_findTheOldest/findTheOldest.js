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

// Do not edit below this line
module.exports = findTheOldest;
