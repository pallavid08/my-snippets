//Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

const moveZeroes = (nums) => {
   let zeroes = nums.filter((item) => item === 0);

   for (let i = 0; i < nums.length; i++) {
      if (nums[0] === 0) {
         nums.shift();
      }
      if (nums[i] === 0) {
         nums.splice(i, 1);
      }
   }

   for (let i = 0; i < zeroes.length; i++) {
      nums.push(zeroes[i]);
   }

   return nums;
};

console.log(moveZeroes([0, 0, 0]));
console.log(moveZeroes([0, 0, 1]));
console.log(moveZeroes([0, 1, 0, 3, 12]));