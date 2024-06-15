const testScenarios7 = [
  [[3, 2, 1, 5, 6, 4], 2],
  [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4],
];

const testSolutions7 = [5, 4];

function submitAnswer7() {
  document.getElementById("answers7").innerHTML = "";
  document.getElementById("answers7").innerHTML = validateQuestion7();
}

function validateQuestion7() {
  for (let count = 0; count < testScenarios7.length; count++) {
    console.log("called");
    if (
      findKthLargest(testScenarios7[count][0], testScenarios7[count][1]) !==
      testSolutions7[count]
    ) {
      return "Error";
    }
  }
  return "Success";
}

/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (numbers, k) {
  const sortedArray1 = [...numbers].sort((a, b) => {
    return a - b;
  });
  const retVal = sortedArray1.splice(-k, 1)[0];
  return retVal;
};
