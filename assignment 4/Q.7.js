// Question 7
// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// **Input:** m = 3, n = 3, ops = [[2,2],[3,3]]

// **Output:** 4

// **Explanation:** The maximum integer in M is 2, and there are four of it in M. So return 4

function maxCount(m, n, ops) {
  let smallestM = m;
  let smallestN = n;

  for (let i = 0; i < ops.length; i++) {
    smallestM = Math.min(smallestM, ops[i][0]);
    smallestN = Math.min(smallestN, ops[i][1]);
  }

  return smallestM * smallestN;
}

// Example usage
let m = 3;
let n = 3;
let ops = [[2, 2], [3, 3]];
let result = maxCount(m, n, ops);
console.log(result); // Output: 4
