//Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = (nums, target) => {
   if (nums.includes(target)) {
      return nums.indexOf(target);
   }
   const resultArray = [...nums];
   console.log(resultArray);
   let final = resultArray.concat(target).sort((a, b) => a - b);
   return final.indexOf(target);
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
