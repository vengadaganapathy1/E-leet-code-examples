/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = candies.reduce((acc, cV, index, array) => {
    array[index] = cV + extraCandies;
    acc.push(array.indexOf(Math.max(...array), index) === index);
    array[index] = cV;
    return acc;
  }, []);
  return maxCandies;
};
// kidsWithCandies([4, 2, 1, 1, 2], 1);

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  const flowerBedLength = flowerbed.length;
  const isEven = flowerBedLength % 2 === 0;
  let maxCanBePlanted = 0;
  let currentPlanted = 0;
  if (isEven) {
    maxCanBePlanted = flowerBedLength / 2;
    currentPlanted = flowerbed.filter((val) => {
      return val === 1;
    }).length;
    return maxCanBePlanted - currentPlanted === n;
  } else if (!isEven) {
    maxCanBePlanted =
      flowerbed.at(1) === 1
        ? Math.floor(flowerBedLength / 2)
        : Math.ceil(flowerBedLength / 2);
    currentPlanted = flowerbed.filter((val) => {
      return val === 1;
    }).length;
    return maxCanBePlanted - currentPlanted === n;
  }
};

// canPlaceFlowers([1, 0, 0, 0, 1], 1);
// canPlaceFlowers([0, 0, 1, 0, 1], 1);

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  // const sorted = nums.sort((a, b) => {
  //     return a - b;
  // });
  // return sorted.length > 2 ? sorted[1] : -1;
  const max = Math.max(...nums);
  nums.slice(nums.indexOf(max), 1);
  const min = Math.min(...nums);
  nums.slice(nums.indexOf(min), 1);
  return nums.length ? nums[0] : -1;
};

// findNonMinOrMax([1, 2]);

let multiArray = [1, [2, 3, 4], [6, 7, 89, 0], 4, [6, 7, 89, 9], 6];
let sum = 0;

function sumAllValues(multiArray) {
  // for (let count = 0; count < multiArray.length; count++) {
  let count = 0;
  while (count < multiArray.length) {
    if (typeof multiArray[count] === "number") {
      sum += multiArray[count];
    } else {
      sumAllValues(multiArray[count]);
    }
    count++;
  }
  // }
  return sum;
}

console.log(sumAllValues(multiArray));
