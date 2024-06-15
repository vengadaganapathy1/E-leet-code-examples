const testScenarios6 = [
  [3, 2, 1],
  [1, 2],
  [2, 2, 3, 1],
];

const testSolutions6 = [1, 2, 1];

function submitAnswer6() {
  document.getElementById("answers6").innerHTML = "";
  document.getElementById("answers6").innerHTML = validateQuestion6();
}

function validateQuestion6() {
  for (let count = 0; count < testScenarios6.length; count++) {
    if (thirdMax(testScenarios6[count]) !== testSolutions6[count]) {
      return "Error";
    }
  }
  return "Success";
}

/**
 * @param {number[]} numbers
 * @return {number}
 */
var thirdMax = function (numbers) {
  const sortedArray = [...new Set(numbers)].sort((a, b) => {
    return b - a;
  });
  return sortedArray.length >= 3 ? sortedArray[2] : sortedArray[0];
};
