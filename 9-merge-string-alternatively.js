/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let retString = "";
  const length = Math.max(word1.length, word2.length);
  for (let count = 0; count < length; count++) {
    let charAtWord1 = word1.charAt(count);
    let charAtWord2 = word2.charAt(count);
    retString += `${charAtWord1 ? charAtWord1 : ""}${
      charAtWord2 ? charAtWord2 : ""
    }`;
  }
  return retString;
};
