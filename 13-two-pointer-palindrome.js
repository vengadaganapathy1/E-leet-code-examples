function palindrome(word) {
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}

console.log(palindrome("malayalam"));
console.log(palindrome("civic"));
console.log(palindrome("stan"));
