/*
 */
const studentArray = [
  {
    name: "Smith",
    score: 0,
  },
  {
    name: "Steve",
    score: 97,
  },
  {
    name: "Mark",
    score: 99,
  },
];

function maxScore(studentArray) {
  const maxValue = studentArray.reduce(
    (pV, cV, index, array) => {
      if (cV.score > pV.score) {
        pV = cV;
      }
      return pV;
    },
    { name: 0, score: 0 }
  );
  return maxValue;
}

function submitAnswer2() {
  document.getElementById("answers2").innerHTML = "";
  document.getElementById("answers2").innerHTML = JSON.stringify(
    maxScore(studentArray)
  );
  flattenedArray = [];
}
