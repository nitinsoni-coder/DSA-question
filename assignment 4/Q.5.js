// 💡 **Question 5**
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

// Given the integer n, return *the number of **complete rows** of the staircase you will build*.

function arrangeCoins(n) {
    let completeRows = 0;
    let remainingCoins = n;
    let currentRowCoins = 1;
  
    while (remainingCoins >= currentRowCoins) {
      completeRows++;
      remainingCoins -= currentRowCoins;
      currentRowCoins++;
    }
  
    return completeRows;
  }
  
  // Example usage
  let n = 5;
  let result = arrangeCoins(n);
  console.log(result); // Output: 2
  