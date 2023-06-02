// Given an integer array nums of length n and an integer target, find three integers
// in nums such that the sum is closest to the target.
// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2

// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let closestSum = nums[0] + nums[1] + nums[2]; // Initialize closest sum to the first three numbers
  
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1; // Pointer to the next element
      let right = nums.length - 1; // Pointer to the last element
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (sum === target) {
          return sum; // If sum equals target, return the sum immediately
        }
  
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum; // Update closestSum if the current sum is closer to the target
        }
  
        if (sum < target) {
          left++; // Move the left pointer to increase the sum
        } else {
          right--; // Move the right pointer to decrease the sum
        }
      }
    }
  
    return closestSum;
  }
  
  // Example usage:
  const nums = [-1, 2, 1, -4];
  const target = 1;
  const result = threeSumClosest(nums, target);
  console.log(result); // Output: 2
  



 
  

