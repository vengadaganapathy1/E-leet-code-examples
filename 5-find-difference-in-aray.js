const testScenarios5 = [
  [
    [1, 2, 3],
    [2, 4, 6],
  ],
  [
    [1, 2, 3, 3],
    [1, 1, 2, 2],
  ],
];

const testSolutions5 = [
  [
    [1, 3],
    [4, 6],
  ],
  [[3], []],
];

function submitAnswer5() {
  document.getElementById("answers5").innerHTML = "";
  document.getElementById("answers5").innerHTML = validateQuestion5();
}

function validateQuestion5() {
  for (let count = 0; count < testScenarios5.length; count++) {
    if (
      findDifference(
        testScenarios5[count][0],
        testScenarios5[count][1]
      ).toString() !== testSolutions5[count].toString()
    ) {
      return "Error";
    }
  }
  return "Success";
}

/**
 * @param {number[]} numbers1
 * @param {number[]} numbers2
 * @return {number[][]}
 */
var findDifference = function (numbers1, numbers2) {
  const output = [];
  output.push(difference(numbers1, numbers2));
  output.push(difference(numbers2, numbers1));
  return output;
};

let difference = function (numbers1, numbers2) {
  const tempNumbers = [];
  numbers1.forEach((val) => {
    if (numbers2.indexOf(val) === -1 && tempNumbers.indexOf(val) === -1) {
      tempNumbers.push(val);
    }
  });
  return tempNumbers;
};
