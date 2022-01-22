//Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

const missingNumber = (nums) => {
   let sorted = nums.sort((a, b) => a - b);
   const found = sorted.findIndex((el, i) => el !== i);
   return found !== -1 ? found : nums.length;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
