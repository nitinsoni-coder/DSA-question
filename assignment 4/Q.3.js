// 💡 Given a 2D integer array matrix, return *the **transpose** of* matrix.

// The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// **Example 1:**

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

// Output: [[1,4,7],[2,5,8],[3,6,9]]

function transpose(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
  
    // Create a new matrix with swapped dimensions
    const transposedMatrix = [];
    for (let j = 0; j < numCols; j++) {
      transposedMatrix[j] = [];
    }
  
    // Copy elements from original matrix to transposed matrix
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        transposedMatrix[j][i] = matrix[i][j];
      }
    }
  
    return transposedMatrix;
  }
  
  // Example usage
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  let result = transpose(matrix);
  console.log(result);
  // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  