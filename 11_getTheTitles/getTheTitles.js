const getTheTitles = function (array) {
  let titleArray = [];
  for (i = 0; i <= array.length - 1; i++) {
    titleArray.push(array[i]["title"]);
  }
  return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
