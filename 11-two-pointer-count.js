const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let expectedValue = 17;
let loopCount = 0;
function getExpectedCount() {
  for (let inner = 0; inner < array.length; inner++) {
    for (let outer = inner + 1; outer < array.length; outer++) {
      loopCount += 1;
      if (array[inner] + array[outer] === expectedValue) {
        console.log(array[inner], array[outer]);
        console.log(loopCount);
        return;
      }
    }
  }
}

getExpectedCount();
loopCount = 0;
let left = 0;
let right = array.length - 1;
let total = 0;
function getExpectedCountUsingTwoPointerAlgo() {
  while (left < right) {
    loopCount += 1;
    total = array[left] + array[right];
    if (total === expectedValue) {
      console.log(array[left], array[right], loopCount);
      break;
    } else if (total > expectedValue) {
      right--;
    } else if (total < expectedValue) {
      left++;
    }
  }
}
getExpectedCountUsingTwoPointerAlgo();
