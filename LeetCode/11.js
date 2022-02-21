// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

var maxArea = function(height) {
    let arr=[...height]
  let len = arr.length;
  let left = 0;
  let right = len - 1;
  let max = 0;

  while (left < right) {
    let area = Math.min(arr[left], arr[right]) * (right - left);
    if (area > max) {
      max = area;
    }
    if (arr[left] < arr[right]) {
      left++;
    } else if (arr[left] >= arr[right]) {
      right--;
    }
  }
  return max;
    
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))