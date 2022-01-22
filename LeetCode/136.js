//Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = (nums) => {
   let numsObj = {};

   for (let i = 0; i < nums.length; i++) {
      if (!numsObj[nums[i]]) {
         numsObj[nums[i]] = 1;
      } else {
         numsObj[nums[i]]++;
      }
   }
   console.log(numsObj);

   let arr = Object.entries(numsObj);
   console.log(arr);

   for (let i = 0; i < arr.length; i++) {
      if (arr[i][1] === 1) {
         return arr[i][0];
      }
   }

   return 0;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
