// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

const majorityElement = function (nums) {
   let sorted = nums.sort((a, b) => a - b);
   let n = sorted.length;
   let counter = 1;
   for (let i = 0; i < n; i++) {
      if (counter > n / 2) {
         return sorted[i];
      }
      if (sorted[i] !== sorted[i + 1]) {
         counter = 1;
      }
      if (sorted[i] === sorted[i + 1]) {
         counter++;
      }
   }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([1, 3, 4, 4, 4, 1, 4]));
