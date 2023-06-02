// Given a sorted array of distinct integers and a target value, return the index if the
// target is found. If not, return the index where it would be if it were inserted in
// order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid; // Target found at index mid
      } else if (nums[mid] < target) {
        left = mid + 1; // Search the right half
      } else {
        right = mid - 1; // Search the left half
      }
    }
  
    return left; // Target not found, return the insert position
  }
  
  // Example usage:
  const nums = [1, 3, 5, 6];
  const target = 5;
  const result = searchInsert(nums, target);
  console.log(result); // Output: 2
  