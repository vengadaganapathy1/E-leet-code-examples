/*
 */
const nestedArray = [1, [2, [3, 4], 5], 6];
let flattenedArray = [];

function flatten(nestedArray) {
  for (x in nestedArray) {
    if (typeof nestedArray[x] === "number") {
      flattenedArray.push(nestedArray[x]);
    } else {
      flatten(nestedArray[x]);
    }
  }
  return flattenedArray;
}

function submitAnswer1() {
  document.getElementById("answers1").innerHTML = "";
  document.getElementById("answers1").innerHTML = flatten(nestedArray);
  flattenedArray = [];
}
