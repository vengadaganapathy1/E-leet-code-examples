const testScenarios = [
  [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ],
  [
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
  ],
  [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ],
  [
    [1, 4],
    [4, 5],
  ],
  [
    [1, 4],
    [0, 4],
  ],
];

const testSolutions = [
  [
    [1, 6],
    [8, 10],
    [15, 18],
  ],
  [1, 10],
  [
    [1, 6],
    [8, 10],
    [15, 18],
  ],
  [[1, 5]],
  [[0, 4]],
];

var merge = function (intervals) {
  const newIntervals = [...intervals];
  newIntervals.sort((a, b) => {
    return a[0] - b[0];
  });
  const retVal = newIntervals.reduce((pV, cV) => {
    if (!pV.length) {
      pV.push(cV);
    } else {
      if (cV[0] > pV[pV.length - 1][1]) {
        pV.push(cV);
      } else {
        pV[pV.length - 1][1] = Math.max(pV[pV.length - 1][1], cV[1]);
      }
    }
    return pV;
  }, []);
  return retVal;
};

function validateQuestion3() {
  for (let count = 0; count < testScenarios.length; count++) {
    if (
      merge(testScenarios[count]).toString() !== testSolutions[count].toString()
    ) {
      return "Error";
    }
  }
  return "Success";
}

function submitAnswer3() {
  document.getElementById("answers3").innerHTML = "";
  document.getElementById("answers3").innerHTML = validateQuestion3();
}
