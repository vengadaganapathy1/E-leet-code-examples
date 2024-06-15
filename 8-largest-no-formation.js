/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    let ab = Number(`${a}${b}`);
    let ba = Number(`${b}${a}`);
    return ba - ab;
  });
  return BigInt(nums.toString().replaceAll(",", "")).toString();
};
