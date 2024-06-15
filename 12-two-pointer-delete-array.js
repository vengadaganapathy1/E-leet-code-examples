// const nums = [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4];
// const expectedVal = 2;
// let left = 0;
// let right = nums.length - 1;
// let maxCombination = 0;
// function getCombinations() {
//   while (left < right) {
//     let total = nums[left] + nums[right];
//     if (total === expectedVal) {
//       maxCombination += 1;
//       left++;
//       right--;
//     } else if (total !== expectedVal && left === right - 1) {
//       left++;
//       right--;
//     } else if (total > expectedVal) {
//       right--;
//     } else if (total < expectedVal) {
//       left++;
//     }
//     if (left > right) {
//       console.log(maxCombination);
//       break;
//     }
//   }
// }

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // let left = 0;
  // let right = height.length - 1;
  let maxOutput = 0;
  for (let outer = 0; outer < height.length - 2; outer++) {
    for (let inner = outer + 1; inner <= height.length - 1; inner++) {
      const min = Math.min(height[outer], height[inner]);
      let volumeLength = Math.abs(outer + 1 - (inner + 1));
      let volume = volumeLength * min;
      if (volume > maxOutput) {
        maxOutput = volume;
      }
    }
  }
  return maxOutput;
};
