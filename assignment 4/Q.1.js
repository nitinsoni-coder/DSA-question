// 💡 **Question 1**
// Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

// **Example 1:**

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

// Output: [1,5]

// **Explanation:** Only 1 and 5 appeared in the three arrays.

function intersection(arr1, arr2, arr3) {
    let result = [];
    let i = 0;
    let j = 0;
    let k = 0;
  
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
      if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
        result.push(arr1[i]);
        i++;
        j++;
        k++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else if (arr2[j] < arr3[k]) {
        j++;
      } else {
        k++;
      }
    }
  
    return result;
  }
  
  // Example usage
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [1, 2, 5, 7, 9];
  let arr3 = [1, 3, 4, 5, 8];
  let result = intersection(arr1, arr2, arr3);
  console.log(result); // Output: [1, 5]
  