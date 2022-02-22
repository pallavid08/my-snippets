// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.




const searchRange = (nums, target) => {
    let resArray = [-1, -1];
  
    // First position of target
    resArray[0] = nums.indexOf(target);
  
    // Last position target
    if (resArray[0] !== -1) {
      for (let i = resArray[0]; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
          resArray[1] = i;
          break;
        }
      }
    }
  
    return resArray;
  };
  
  console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
  console.log(searchRange([], 0));
  