const testScenarios4 = [
  "the sky is blue",
  "  hello world  ",
  "a good   example",
];

const testSolutions4 = ["blue is sky the", "world hello", "example good a"];

function submitAnswer4() {
  document.getElementById("answers4").innerHTML = "";
  document.getElementById("answers4").innerHTML = validateQuestion4();
}

function validateQuestion4() {
  for (let count = 0; count < testScenarios4.length; count++) {
    if (reverseWords(testScenarios4[count]) !== testSolutions4[count]) {
      return "Error";
    }
  }
  return "Success";
}

/**
 * @param {string}
 * @return {string}
 */
var reverseWords = function (s) {
  const splitWords = s.split(" ").reverse();
  const retVal = splitWords.reduce((acc, cV) => {
    const trimmedValue = cV.trim();
    if (trimmedValue !== "") {
      acc = acc + trimmedValue + " ";
    }
    return acc;
  }, "");
  return retVal.trim();
};
